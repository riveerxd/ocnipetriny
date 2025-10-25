# Feature Specification: Data Extraction from nclinic.cz

**Feature Branch**: `001-data-extraction-from`
**Created**: 2025-10-06
**Status**: Draft
**Input**: User description: "data extraction from www.nclinic.cz into a md file"

## Execution Flow (main)
```
1. Parse user description from Input
   → Feature identified: Extract content from www.nclinic.cz
2. Extract key concepts from description
   → Actors: Developer/content migrator
   → Actions: Extract, structure, save
   → Data: Website content (text, images, contact info)
   → Constraints: Must be complete and accurate
3. For each unclear aspect:
   → Image handling strategy unclear - marked below
   → Formatting preferences unclear - marked below
4. Fill User Scenarios & Testing section
   → Clear user flow: run extraction → verify completeness → use in rebuild
5. Generate Functional Requirements
   → All requirements testable
   → Some ambiguous aspects marked
6. Identify Key Entities
   → ContentSection, ContactInfo, ServiceDescription, PricingInfo
7. Run Review Checklist
   → WARN: Some [NEEDS CLARIFICATION] markers present
8. Return: SUCCESS (spec ready for planning after clarifications)
```

---

## ⚡ Quick Guidelines
- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business stakeholders, not developers

---

## Clarifications

### Session 2025-10-06
- Q: How should images from the website be handled? → A: Do not download images; focus on extracting structured data (opening hours, doctors, company info including phone, email, ICO, location)
- Q: Should the markdown file include metadata (extraction date, source URL)? → A: Include minimal metadata (date only)
- Q: How should network errors be handled during extraction? → A: Retry up to 3 times with delay, then report error
- Q: Where should the output markdown file be saved and what should it be named? → A: In a `data/` directory as `extracted-content.md`
- Q: What structure should the markdown content follow for the extracted data? → A: Structured data format with clear labels (e.g., "Phone:", "Email:", "Hours:")

---

## User Scenarios & Testing *(mandatory)*

### Primary User Story
As a developer working on the NClinic.cz remake, I need to extract all content from the current website (www.nclinic.cz) and save it into a structured markdown file, so that I can reference it when building the new modern single-page application and ensure no content is lost during migration.

### Acceptance Scenarios
1. **Given** the current nclinic.cz website is accessible, **When** the extraction process runs, **Then** all text content from all sections (Home, Services, Pricing, Contact) is captured in `data/extracted-content.md`

2. **Given** the website contains contact information (phone, email, address, hours), **When** extraction completes, **Then** all contact details are accurately preserved in the markdown file with structured labels (Phone:, Email:, Address:, Hours:, ICO:)

3. **Given** the website lists multiple services with descriptions, **When** extraction completes, **Then** each service and its description is captured with clear section headings

4. **Given** the extraction is complete, **When** reviewing `data/extracted-content.md`, **Then** content is organized logically by section matching the website's navigation structure with extraction date in metadata

### Edge Cases
- What happens when the website is temporarily unavailable? System will retry up to 3 times with delay, then report error if all attempts fail.
- What happens if pricing information is in a non-standard format? System should extract it as-is and preserve the original formatting.
- How are special characters or Czech language diacritics preserved? System must maintain UTF-8 encoding throughout.
- What happens if doctor information is missing or incomplete? System should extract whatever information is available.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: System MUST extract all text content from the homepage, services, pricing, and contact sections of www.nclinic.cz

- **FR-002**: System MUST preserve the hierarchical structure of content (main sections, subsections, list items)

- **FR-003**: System MUST capture all company information including phone number (+420 703 622 644), email (sestra@nclinic.cz), physical address (Zárubova 498/31, Prague 12), business hours (Monday-Friday, 8:00-12:00 and 12:30-16:00), and ICO (Czech company identification number)

- **FR-004**: System MUST extract all service descriptions including:
  - Preventive Care (check-ups, cleaning, fluoride, hygiene instructions)
  - Acute Care (emergency treatment, pain management)
  - Painless Treatment (analgosedation)
  - Conservative Dentistry
  - Dental Hygiene

- **FR-005**: System MUST extract pricing information if present on the website

- **FR-006**: System MUST preserve Czech language text with correct diacritics and special characters (š, č, ř, ž, etc.)

- **FR-007**: System MUST output content to a markdown file with proper heading hierarchy (# for main sections, ## for subsections, etc.) using a structured data format with clear labels (e.g., "Phone:", "Email:", "Hours:", "Address:", "ICO:")

- **FR-008**: System MUST extract information about doctors/staff members if present on the website, including names, titles, specializations, and qualifications, formatted with clear labels

- **FR-009**: Images MUST NOT be downloaded; image URLs may be recorded for reference only

- **FR-010**: System MUST include minimal metadata in the markdown file output (extraction date only)

- **FR-011**: System MUST save the output to `data/extracted-content.md` (creating the `data/` directory if it doesn't exist)

- **FR-012**: System MUST handle network errors by retrying up to 3 times with a delay between attempts, then reporting the error if all retries fail

- **FR-013**: System MUST preserve any testimonials or patient reviews if present on the website

- **FR-014**: System MUST capture the clinic's main messaging/tagline: "Naším cílem je váš zdravý a krásný úsměv bez bolesti" (Our goal is a healthy and beautiful smile without pain)

### Key Entities *(include if feature involves data)*

- **ContentSection**: Represents a major section of the website (e.g., Home, Services, Pricing, Contact). Attributes: title, body text, subsections, order/hierarchy

- **ServiceDescription**: Represents a dental service offered by the clinic. Attributes: service name, description text, category (preventive/acute/etc.)

- **ContactInformation**: Represents clinic contact details. Attributes: phone number, email address, physical address (street, city, postal code), business hours (days, times), ICO (Czech company identification number)

- **DoctorInfo**: Represents information about doctors/staff members. Attributes: name, title, specialization, qualifications, role

- **PricingItem**: Represents pricing information if available. Attributes: service name, price, currency, any conditions or notes

---

## Review & Acceptance Checklist
*GATE: Automated checks run during main() execution*

### Content Quality
- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness
- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable (all content extracted, verified against website)
- [x] Scope is clearly bounded (single website, specific sections)
- [x] Dependencies and assumptions identified (website must be accessible, Czech character encoding)

---

## Execution Status
*Updated by main() during processing*

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities resolved (3 clarifications completed)
- [x] User scenarios defined
- [x] Requirements generated
- [x] Entities identified
- [x] Review checklist passed

---
