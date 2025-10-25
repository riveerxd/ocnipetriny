import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure axios with retry logic
axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error) ||
           (error.response && error.response.status >= 500);
  }
});

const SOURCE_URL = 'https://www.nclinic.cz';
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'extracted-content.md');

/**
 * Fetch HTML content from URL with retry logic
 * @param {string} url - URL to fetch
 * @returns {Promise<string>} HTML content
 */
async function fetchHTML(url) {
  try {
    console.log(`Fetching content from ${url}...`);
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DataExtractor/1.0)'
      },
      timeout: 10000
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`HTTP Error ${error.response.status}: ${error.response.statusText}`);
    } else if (error.request) {
      throw new Error('Network error: No response received from server');
    } else {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}

/**
 * Generate extraction metadata
 * @returns {Object} Metadata object with date and source URL
 */
function generateMetadata() {
  return {
    extractionDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    sourceUrl: SOURCE_URL
  };
}

/**
 * Extract contact information from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Object} Contact information
 */
function extractContactInfo($) {
  console.log('Extracting company information...');

  const contactInfo = {
    phone: '',
    email: '',
    address: '',
    city: '',
    ico: '',
    businessHours: ''
  };

  // Extract phone number
  $('a[href^="tel:"]').each((i, el) => {
    const text = $(el).text().trim();
    if (text && !contactInfo.phone) {
      contactInfo.phone = text;
    }
  });

  // Extract email
  $('a[href^="mailto:"]').each((i, el) => {
    const text = $(el).text().trim();
    if (text && !contactInfo.email) {
      contactInfo.email = text;
    }
  });

  // Extract address - look for address-related content
  $('*').each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes('Zárubova') || text.match(/\d{3}\/\d{2}/)) {
      const lines = text.split('\n').map(l => l.trim()).filter(l => l);
      for (const line of lines) {
        if ((line.includes('Zárubova') || line.match(/\d{3}\/\d{2}/)) && !contactInfo.address) {
          contactInfo.address = line;
        }
        if (line.includes('Prague') && !contactInfo.city) {
          contactInfo.city = line;
        }
      }
    }
  });

  // Extract ICO
  $('*').each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes('IČO') || text.includes('ICO')) {
      const match = text.match(/IČ?O[:\s]*(\d+)/i);
      if (match && !contactInfo.ico) {
        contactInfo.ico = match[1];
      }
    }
  });

  // Extract business hours
  $('*').each((i, el) => {
    const text = $(el).text().trim();
    if (text.match(/\d{1,2}:\d{2}/)) {
      // Look for time patterns
      if ((text.includes('Monday') || text.includes('Pondělí') || text.match(/Po.*Pá/i)) && !contactInfo.businessHours) {
        contactInfo.businessHours = text;
      }
    }
  });

  return contactInfo;
}

/**
 * Extract service descriptions from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Array} Array of service objects
 */
function extractServices($) {
  console.log('Extracting services...');

  const services = [];
  const serviceKeywords = [
    'Preventive Care', 'Preventivní péče',
    'Acute Care', 'Akutní péče',
    'Painless Treatment', 'Bezbolestné ošetření',
    'Conservative Dentistry', 'Konzervační zubní lékařství',
    'Dental Hygiene', 'Dentální hygiena'
  ];

  // Look for service sections
  $('h2, h3, h4, .service, .section').each((i, el) => {
    const $el = $(el);
    const title = $el.text().trim();

    // Check if this heading matches a service keyword
    for (const keyword of serviceKeywords) {
      if (title.toLowerCase().includes(keyword.toLowerCase()) ||
          keyword.toLowerCase().includes(title.toLowerCase())) {

        // Get the description from next siblings or parent content
        let description = '';
        let $next = $el.next();

        // Collect text from following elements until next heading
        while ($next.length && !$next.is('h2, h3, h4')) {
          const text = $next.text().trim();
          if (text) {
            description += text + '\n';
          }
          $next = $next.next();
        }

        if (!description) {
          // Try getting content from parent
          description = $el.parent().text().trim();
        }

        services.push({
          name: title,
          description: description.trim()
        });
        break;
      }
    }
  });

  // If no services found by headings, try to extract by content
  if (services.length === 0) {
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      for (const keyword of serviceKeywords) {
        if (text.includes(keyword) && services.filter(s => s.name.includes(keyword)).length === 0) {
          services.push({
            name: keyword,
            description: text.substring(text.indexOf(keyword))
          });
        }
      }
    });
  }

  return services;
}

/**
 * Extract doctor information from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Array} Array of doctor objects
 */
function extractDoctors($) {
  console.log('Extracting doctor information...');

  const doctors = [];
  const doctorTitles = ['MUDr.', 'Dr.', 'DDS', 'MDDr.', 'Lékař', 'Doktor'];

  // Look for doctor sections
  $('*').each((i, el) => {
    const text = $(el).text().trim();

    // Check for doctor title patterns
    for (const title of doctorTitles) {
      if (text.includes(title)) {
        const name = text.split('\n')[0].trim();
        if (name && name.length < 100 && !doctors.find(d => d.name === name)) {
          doctors.push({
            name: name,
            title: title,
            specialization: '',
            qualifications: []
          });
        }
      }
    }
  });

  return doctors;
}

/**
 * Extract pricing information from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Array} Array of pricing objects
 */
function extractPricing($) {
  console.log('Extracting pricing...');

  const pricing = [];
  const priceKeywords = ['cena', 'price', 'Kč', 'CZK', 'ceník'];

  // Look for price-related content
  $('*').each((i, el) => {
    const text = $(el).text().trim();

    // Look for Czech koruna amounts
    if (text.match(/\d+\s*(Kč|CZK)/i)) {
      const lines = text.split('\n').map(l => l.trim()).filter(l => l);
      for (const line of lines) {
        if (line.match(/\d+\s*(Kč|CZK)/i) && line.length < 200) {
          // Extract service name and price
          const match = line.match(/(.+?)[\s:]+(\d+\s*(?:Kč|CZK))/i);
          if (match && !pricing.find(p => p.serviceName === match[1].trim())) {
            pricing.push({
              serviceName: match[1].trim(),
              price: match[2].trim()
            });
          }
        }
      }
    }
  });

  return pricing;
}

/**
 * Extract testimonials from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Array} Array of testimonial objects
 */
function extractTestimonials($) {
  console.log('Extracting testimonials...');

  const testimonials = [];
  const testimonialKeywords = ['recenze', 'reference', 'testimonial', 'review', 'hodnocení'];

  // Look for testimonial sections
  $('*').each((i, el) => {
    const text = $(el).text().trim();

    // Check for testimonial-related content
    for (const keyword of testimonialKeywords) {
      if (text.toLowerCase().includes(keyword)) {
        // Try to extract testimonials
        const $parent = $(el).parent();
        $parent.find('.testimonial, .review, blockquote, .quote').each((i, testimonialEl) => {
          const content = $(testimonialEl).text().trim();
          if (content && content.length > 20 && content.length < 1000) {
            testimonials.push({
              author: 'Anonymous',
              content: content,
              date: ''
            });
          }
        });
      }
    }
  });

  return testimonials;
}

/**
 * Extract clinic message/tagline from HTML
 * @param {CheerioAPI} $ - Cheerio instance
 * @returns {Object} Clinic message object
 */
function extractClinicMessage($) {
  console.log('Extracting clinic message...');

  let tagline = '';

  // Look for the specific tagline
  const targetTagline = 'Naším cílem je váš zdravý a krásný úsměv bez bolesti';

  $('*').each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes('úsměv') || text.includes('cílem')) {
      // Check if this is the tagline we're looking for
      if (text.includes('bez bolesti') || text.includes('úsměv')) {
        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
        for (const line of lines) {
          if (line.includes('úsměv') && line.length < 200) {
            tagline = line;
            return false; // Break out of .each()
          }
        }
      }
    }
  });

  return { tagline };
}

/**
 * Format extracted data as markdown
 * @param {Object} data - All extracted data
 * @returns {string} Formatted markdown content
 */
function formatAsMarkdown(data) {
  console.log('Formatting as markdown...');

  let markdown = `# NClinic.cz - Extracted Content\n\n`;
  markdown += `**Extraction Date**: ${data.metadata.extractionDate}\n\n`;

  // Company Information
  markdown += `## Company Information\n\n`;
  if (data.contactInfo.phone) markdown += `**Phone**: ${data.contactInfo.phone}\n`;
  if (data.contactInfo.email) markdown += `**Email**: ${data.contactInfo.email}\n`;
  if (data.contactInfo.address) markdown += `**Address**: ${data.contactInfo.address}\n`;
  if (data.contactInfo.city) markdown += `**City**: ${data.contactInfo.city}\n`;
  if (data.contactInfo.ico) markdown += `**ICO**: ${data.contactInfo.ico}\n`;
  if (data.contactInfo.businessHours) markdown += `**Hours**: ${data.contactInfo.businessHours}\n`;
  markdown += `\n`;

  // Clinic Message
  if (data.message.tagline) {
    markdown += `## About\n\n`;
    markdown += `**Our Mission**: ${data.message.tagline}\n\n`;
  }

  // Services
  if (data.services.length > 0) {
    markdown += `## Services\n\n`;
    for (const service of data.services) {
      markdown += `### ${service.name}\n\n`;
      if (service.description) {
        markdown += `${service.description}\n\n`;
      }
    }
  }

  // Doctors
  if (data.doctors.length > 0) {
    markdown += `## Doctors\n\n`;
    for (const doctor of data.doctors) {
      markdown += `### ${doctor.name}\n\n`;
      if (doctor.title) markdown += `**Title**: ${doctor.title}\n`;
      if (doctor.specialization) markdown += `**Specialization**: ${doctor.specialization}\n`;
      if (doctor.qualifications.length > 0) {
        markdown += `**Qualifications**:\n`;
        for (const qual of doctor.qualifications) {
          markdown += `- ${qual}\n`;
        }
      }
      markdown += `\n`;
    }
  }

  // Pricing
  if (data.pricing.length > 0) {
    markdown += `## Pricing\n\n`;
    for (const item of data.pricing) {
      markdown += `### ${item.serviceName}\n\n`;
      markdown += `**Price**: ${item.price}\n\n`;
    }
  }

  // Testimonials
  if (data.testimonials.length > 0) {
    markdown += `## Testimonials\n\n`;
    for (const testimonial of data.testimonials) {
      markdown += `### ${testimonial.author}\n`;
      if (testimonial.date) markdown += `**Date**: ${testimonial.date}\n`;
      markdown += `\n"${testimonial.content}"\n\n`;
    }
  }

  return markdown;
}

/**
 * Write content to file with UTF-8 encoding
 * @param {string} filePath - Path to output file
 * @param {string} content - Content to write
 */
function writeToFile(filePath, content) {
  console.log(`Writing to ${filePath}...`);

  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file with UTF-8 encoding
    fs.writeFileSync(filePath, content, { encoding: 'utf8' });
    console.log('Extraction complete!');
  } catch (error) {
    throw new Error(`Failed to write file: ${error.message}`);
  }
}

/**
 * Main extraction function
 */
async function main() {
  try {
    console.log('Data extraction script initialized\n');

    // Step 1: Fetch HTML
    const html = await fetchHTML(SOURCE_URL);

    // Step 2: Load HTML into Cheerio
    const $ = cheerio.load(html);

    // Step 3: Extract all data
    const metadata = generateMetadata();
    const contactInfo = extractContactInfo($);
    const services = extractServices($);
    const doctors = extractDoctors($);
    const pricing = extractPricing($);
    const testimonials = extractTestimonials($);
    const message = extractClinicMessage($);

    // Step 4: Combine all extracted data
    const extractedData = {
      metadata,
      contactInfo,
      services,
      doctors,
      pricing,
      testimonials,
      message
    };

    // Step 5: Format as markdown
    const markdown = formatAsMarkdown(extractedData);

    // Step 6: Write to file
    writeToFile(OUTPUT_FILE, markdown);

  } catch (error) {
    console.error('Fatal error:', error.message);
    process.exit(1);
  }
}

// Execute main function
main();
