# Data Model: Data Extraction from nclinic.cz

**Feature**: 001-data-extraction-from
**Date**: 2025-10-06

## Overview

This document describes the data entities extracted from www.nclinic.cz and their structure in the output markdown file.

## Entities

### 1. ExtractionMetadata

Represents metadata about the extraction process.

**Fields**:
- `extractionDate`: Date (ISO 8601 format) - When the extraction was performed
- `sourceUrl`: String - Always "https://www.nclinic.cz"

**Validation**:
- `extractionDate` must be valid date
- Format: "YYYY-MM-DD"

**Output Format**:
```markdown
# NClinic.cz - Extracted Content

**Extraction Date**: 2025-10-06
```

---

### 2. ContactInformation

Represents clinic contact and company details.

**Fields**:
- `phone`: String - Phone number in Czech format
- `email`: String - Contact email address
- `address`: String - Full physical address
- `city`: String - City name
- `ico`: String - Czech company identification number
- `businessHours`: String - Operating hours description

**Validation**:
- `phone` format: +420 XXX XXX XXX
- `email` must contain @
- `ico` should be numeric (if found)
- All fields preserve UTF-8 Czech characters

**Expected Values** (from spec):
- Phone: +420 703 622 644
- Email: sestra@nclinic.cz
- Address: Zárubova 498/31, Prague 12
- Hours: Monday-Friday, 8:00-12:00 and 12:30-16:00

**Output Format**:
```markdown
## Company Information

**Phone**: +420 703 622 644
**Email**: sestra@nclinic.cz
**Address**: Zárubova 498/31, Prague 12
**ICO**: [extracted value]
**Hours**: Monday-Friday, 8:00-12:00 and 12:30-16:00
```

---

### 3. ServiceDescription

Represents a dental service offered by the clinic.

**Fields**:
- `name`: String - Service name
- `category`: String - Service category (Preventive, Acute, etc.)
- `description`: String - Detailed service description

**Validation**:
- `name` required
- `description` preserves formatting and Czech characters

**Expected Services** (from spec):
1. Preventive Care
   - Regular check-ups
   - Professional teeth cleaning
   - Fluoride application
   - Oral hygiene instructions
2. Acute Care
   - Emergency dental treatment
   - Pain management
3. Painless Treatment
   - Analgosedation
4. Conservative Dentistry
5. Dental Hygiene

**Output Format**:
```markdown
## Services

### Preventive Care

**Description**: [extracted description]
**Includes**:
- Regular check-ups
- Professional teeth cleaning
- Fluoride application
- Oral hygiene instructions

### Acute Care

**Description**: [extracted description]
```

---

### 4. DoctorInfo

Represents information about doctors/staff members.

**Fields**:
- `name`: String - Doctor's full name
- `title`: String - Academic/professional title (e.g., MUDr., DDS)
- `specialization`: String - Area of expertise
- `qualifications`: String[] - List of qualifications/certifications
- `role`: String - Role at clinic (e.g., "Chief Dentist", "Dental Hygienist")

**Validation**:
- `name` required
- Other fields optional (extract what's available)
- Preserve UTF-8 characters in Czech names and titles

**Output Format**:
```markdown
## Doctors

### Dr. [Name], [Title]

**Specialization**: [specialization]
**Qualifications**:
- [qualification 1]
- [qualification 2]
**Role**: [role]
```

---

### 5. PricingItem

Represents pricing information for services.

**Fields**:
- `serviceName`: String - Name of service
- `price`: String - Price (as displayed on site)
- `currency`: String - Currency code (CZK expected)
- `notes`: String - Any conditions or additional notes

**Validation**:
- `serviceName` required
- `price` preserved as-is (may be range, "from X", etc.)
- Handle non-standard formats gracefully

**Output Format**:
```markdown
## Pricing

### [Service Name]

**Price**: [price] CZK
**Notes**: [any conditions]
```

---

### 6. Testimonial

Represents patient testimonials or reviews.

**Fields**:
- `author`: String - Patient name (may be anonymous/initials)
- `content`: String - Testimonial text
- `date`: String - Date if available

**Validation**:
- `content` required
- `author` and `date` optional
- Preserve full UTF-8 text

**Output Format**:
```markdown
## Testimonials

### [Author/Anonymous]
**Date**: [date if available]

"[testimonial content]"
```

---

### 7. ClinicMessage

Represents the clinic's main messaging/tagline.

**Fields**:
- `tagline`: String - Main message/slogan

**Expected Value** (from spec):
- "Naším cílem je váš zdravý a krásný úsměv bez bolesti"
  (Our goal is a healthy and beautiful smile without pain)

**Output Format**:
```markdown
## About

**Our Mission**: Naším cílem je váš zdravý a krásný úsměv bez bolesti
```

---

## Complete Output Structure

```markdown
# NClinic.cz - Extracted Content

**Extraction Date**: YYYY-MM-DD

## Company Information

**Phone**: ...
**Email**: ...
**Address**: ...
**ICO**: ...
**Hours**: ...

## About

**Our Mission**: ...

## Services

### [Service Category]
...

## Doctors

### [Doctor Name]
...

## Pricing

### [Service]
...

## Testimonials

### [Author]
...
```

## State Transitions

N/A - This is a one-time extraction, no state management needed.

## Relationships

- Each `ServiceDescription` is independent
- Each `DoctorInfo` is independent
- Each `PricingItem` may relate to a `ServiceDescription` by name
- All entities are children of a single extraction output file

## Data Volume Estimate

- 1 ExtractionMetadata
- 1 ContactInformation
- 1 ClinicMessage
- 5-7 ServiceDescription entities
- 0-5 DoctorInfo entities (if present on website)
- 0-20 PricingItem entities (if present)
- 0-10 Testimonial entities (if present)

**Total estimated sections**: 10-15
**Estimated output file size**: 5-15 KB
