# Research: Data Extraction from nclinic.cz

**Feature**: 001-data-extraction-from
**Date**: 2025-10-06

## Research Questions

### 1. Language/Runtime Selection: JavaScript vs Python?

**Decision**: JavaScript (Node.js) with Cheerio library

**Rationale**:
- Project already uses Nuxt 4 + Vue 3 (package.json shows Node.js ecosystem)
- Team familiarity with JavaScript/TypeScript
- Cheerio is lightweight, fast, and excellent for HTML parsing
- Axios for HTTP requests with built-in retry support
- Native UTF-8 support in Node.js
- Simple script can be run with `node scripts/extract-nclinic-data.js`

**Alternatives Considered**:
- **Python with BeautifulSoup**: Excellent option, but adds different runtime dependency. Team already has Node.js installed for Nuxt.
- **Puppeteer/Playwright**: Overkill for static content extraction, slower, heavier

### 2. Web Scraping Library Selection

**Decision**: Cheerio + Axios (Node.js)

**Rationale**:
- **Cheerio**: jQuery-like API for HTML parsing, lightweight, fast
- **Axios**: Popular HTTP client with retry support, interceptors for error handling
- **axios-retry**: Plugin for automatic retry logic (3 attempts with exponential backoff)
- Both libraries have excellent UTF-8 character support
- Well-documented and widely used

**Implementation Pattern**:
```javascript
const axios = require('axios');
const axiosRetry = require('axios-retry');
const cheerio = require('cheerio');
const fs = require('fs');

// Configure axios with retry
axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay
});
```

**Alternatives Considered**:
- **jsdom**: More complete DOM implementation, but heavier and slower
- **node-fetch**: Simpler but requires custom retry logic
- **got**: Modern alternative to axios, but less ecosystem support

### 3. UTF-8 Character Preservation

**Decision**: Use Node.js default UTF-8 encoding

**Rationale**:
- Node.js uses UTF-8 by default for string operations
- fs.writeFile with UTF-8 encoding explicitly specified
- Cheerio preserves original character encoding
- Axios handles UTF-8 responses automatically

**Implementation**:
```javascript
fs.writeFileSync('data/extracted-content.md', content, { encoding: 'utf8' });
```

### 4. Structured Output Format

**Decision**: Markdown with labeled key-value format

**Rationale**:
- Easy to read and parse for humans
- Simple to generate programmatically
- Clear labels (Phone:, Email:, etc.) as specified in requirements
- Hierarchical structure with # headings

**Format Template**:
```markdown
# NClinic.cz - Extracted Content

**Extraction Date**: 2025-10-06

## Company Information

**Phone**: +420 703 622 644
**Email**: sestra@nclinic.cz
**Address**: Zárubova 498/31, Prague 12
**ICO**: [extracted value]
**Hours**: Monday-Friday, 8:00-12:00 and 12:30-16:00

## Services

### Preventive Care
[description...]

### Acute Care
[description...]

## Doctors
[if available]

## Pricing
[if available]

## Testimonials
[if available]
```

### 5. Error Handling Strategy

**Decision**: Retry with exponential backoff + detailed error reporting

**Rationale**:
- axios-retry provides 3 automatic retries with exponential backoff
- Catch and log specific error types (network, timeout, 404, etc.)
- Exit with error code 1 if all retries fail
- Provide clear error messages to user

**Implementation**:
```javascript
try {
  const response = await axios.get('https://www.nclinic.cz');
  // Process...
} catch (error) {
  if (error.response) {
    console.error(`HTTP Error: ${error.response.status}`);
  } else if (error.request) {
    console.error('Network error: No response received');
  } else {
    console.error(`Error: ${error.message}`);
  }
  process.exit(1);
}
```

### 6. Extraction Strategy

**Decision**: CSS Selectors + Text Content Extraction

**Rationale**:
- Use Cheerio's CSS selector API to target specific elements
- Extract text content while preserving structure
- Iterate through sections systematically
- Map website structure to markdown sections

**Approach**:
1. Load HTML with Cheerio
2. Select main content sections by CSS selectors
3. Extract text, preserving hierarchy
4. Format as structured markdown
5. Write to file

## Technology Stack Summary

| Component | Technology | Version |
|-----------|-----------|---------|
| Runtime | Node.js | Latest LTS (v20+) |
| HTTP Client | axios | ^1.6.0 |
| Retry Logic | axios-retry | ^4.0.0 |
| HTML Parser | cheerio | ^1.0.0 |
| File System | Node.js fs | Built-in |
| Encoding | UTF-8 | Default |

## Dependencies to Install

```bash
npm install axios axios-retry cheerio
```

## Execution Plan

1. Create `scripts/extract-nclinic-data.js`
2. Install dependencies
3. Implement extraction logic
4. Test with real website
5. Verify output format
6. Verify Czech character preservation
7. Test error handling (disconnect network, test retry)

## Known Constraints

- Website must be accessible (www.nclinic.cz)
- Relies on current HTML structure (may break if site changes)
- Static content only (no JavaScript rendering needed)
- One-time or occasional use (not production service)

## Alternatives for Future Consideration

If website requires JavaScript rendering in future:
- Puppeteer (headless Chrome)
- Playwright (multi-browser)

If more complex extraction needed:
- Scrapy (Python framework)
- Custom API integration if nclinic.cz provides one
