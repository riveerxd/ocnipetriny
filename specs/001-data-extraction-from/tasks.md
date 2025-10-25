# Tasks: Data Extraction from nclinic.cz

**Input**: Design documents from `/home/river/Projects/nclinic.cz/specs/001-data-extraction-from/`
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- Script location: `scripts/extract-nclinic-data.js`
- Output location: `data/extracted-content.md`
- Dependencies: Managed via package.json

## Phase 3.1: Setup

- [X] T001 Install required dependencies: axios, axios-retry, and cheerio via npm

- [X] T002 Create `scripts/` directory if it doesn't exist and initialize `scripts/extract-nclinic-data.js` with basic structure (imports, main function, error handling skeleton)

- [X] T003 Create `data/` directory if it doesn't exist for output file

## Phase 3.2: Core Extraction Functions

- [X] T004 Implement HTTP fetching function in `scripts/extract-nclinic-data.js` with axios + axios-retry configured for 3 retries with exponential backoff

- [X] T005 Implement ExtractionMetadata generation function in `scripts/extract-nclinic-data.js` that returns current date in ISO format and source URL

- [X] T006 Implement ContactInformation extraction function in `scripts/extract-nclinic-data.js` that extracts phone, email, address, ICO, and business hours from HTML using Cheerio selectors

- [X] T007 Implement ServiceDescription extraction function in `scripts/extract-nclinic-data.js` that extracts all 5 service categories (Preventive Care, Acute Care, Painless Treatment, Conservative Dentistry, Dental Hygiene) with descriptions

- [X] T008 Implement DoctorInfo extraction function in `scripts/extract-nclinic-data.js` that extracts doctor names, titles, specializations, qualifications if present on the website

- [X] T009 Implement PricingItem extraction function in `scripts/extract-nclinic-data.js` that extracts pricing information if available, preserving non-standard formats as-is

- [X] T010 Implement Testimonial extraction function in `scripts/extract-nclinic-data.js` that extracts patient testimonials/reviews if present

- [X] T011 Implement ClinicMessage extraction function in `scripts/extract-nclinic-data.js` that extracts the tagline "Naším cílem je váš zdravý a krásný úsměv bez bolesti"

## Phase 3.3: Output Formatting

- [X] T012 Implement markdown formatter function in `scripts/extract-nclinic-data.js` that takes extracted data and formats it with proper heading hierarchy and structured labels (Phone:, Email:, etc.)

- [X] T013 Implement file writer function in `scripts/extract-nclinic-data.js` that writes formatted content to `data/extracted-content.md` with UTF-8 encoding

## Phase 3.4: Integration & Error Handling

- [X] T014 Wire all extraction functions together in main execution flow in `scripts/extract-nclinic-data.js` (fetch → extract all entities → format → write)

- [X] T015 Implement comprehensive error handling in `scripts/extract-nclinic-data.js` for network errors, parsing errors, and file system errors with clear error messages

- [X] T016 Add console logging for extraction progress in `scripts/extract-nclinic-data.js` (fetching, extracting each section, writing output)

## Phase 3.5: Manual Testing & Verification

- [X] T017 Execute the script with `node scripts/extract-nclinic-data.js` and verify output file is created at `data/extracted-content.md`

- [X] T018 Follow quickstart.md verification checklist step 1-5: verify file creation, metadata, company information, services extracted, and Czech character preservation

- [X] T019 Follow quickstart.md verification checklist step 6-10: verify structured format, tagline extraction, doctor info (if present), pricing (if present), and UTF-8 encoding

- [X] T020 Test error handling by simulating network failure (disconnect or use invalid URL temporarily) and verify 3 retry attempts with clear error message

- [X] T021 Compare extracted content in `data/extracted-content.md` against live website www.nclinic.cz to ensure accuracy and completeness using quickstart.md manual verification table

## Dependencies

```
Setup (T001-T003) must complete before all other tasks
Core extraction (T004-T011) can proceed after setup
  T004 (HTTP fetching) blocks T005-T011
  T005-T011 are sequential (same file)
Output formatting (T012-T013) depends on extraction functions existing
  T012 blocks T013
Integration (T014-T016) depends on all previous functions
  T014 must complete before T015-T016
Manual testing (T017-T021) depends on complete implementation
  T017 blocks T018-T021
```

## Execution Notes

- All tasks modify the same file (`scripts/extract-nclinic-data.js`), so they must be executed sequentially
- No parallel execution possible for this feature (single script file)
- Total estimated time: 2-3 hours for implementation + 30 minutes for testing
- Manual verification is critical since this is a one-time utility with no automated tests

## Task Execution Example

```bash
# T001: Install dependencies
npm install axios axios-retry cheerio

# T002: Create script file
mkdir -p scripts
touch scripts/extract-nclinic-data.js

# T003: Create data directory
mkdir -p data

# T004-T016: Implement script
# (Edit scripts/extract-nclinic-data.js with each function)

# T017: Run extraction
node scripts/extract-nclinic-data.js

# T018-T021: Manual verification
cat data/extracted-content.md
# Follow quickstart.md checklist
```

## Success Criteria

- ✅ Script successfully extracts all content from www.nclinic.cz
- ✅ Output file `data/extracted-content.md` contains all required sections
- ✅ Czech characters (š, č, ř, ž, etc.) are preserved correctly
- ✅ Structured format with clear labels (Phone:, Email:, etc.)
- ✅ Retry logic works (3 attempts with exponential backoff)
- ✅ All verification steps in quickstart.md pass
- ✅ Content matches live website (manual comparison)

## Notes

- This is a utility script, not part of the main application
- No unit tests required - manual verification via quickstart.md is sufficient
- Script can be re-run if website content updates
- Consider adding to package.json scripts for easier execution: `"extract": "node scripts/extract-nclinic-data.js"`
