# Quickstart: Data Extraction from nclinic.cz

**Feature**: 001-data-extraction-from
**Purpose**: Manual testing and verification guide

## Prerequisites

- Node.js v20+ installed
- Internet connection
- Access to www.nclinic.cz

## Setup

```bash
# 1. Navigate to project root
cd /home/river/Projects/nclinic.cz

# 2. Install dependencies (if not already installed)
npm install axios axios-retry cheerio

# 3. Verify script exists
ls scripts/extract-nclinic-data.js
```

## Running the Extraction

```bash
# Execute the extraction script
node scripts/extract-nclinic-data.js
```

**Expected Output**:
```
Fetching content from https://www.nclinic.cz...
Extracting company information...
Extracting services...
Extracting doctor information...
Extracting pricing...
Extracting testimonials...
Writing to data/extracted-content.md...
Extraction complete!
```

## Verification Checklist

### 1. File Created
```bash
# Verify output file exists
ls data/extracted-content.md

# Check file size (should be 5-15 KB)
du -h data/extracted-content.md
```

✅ **PASS**: File exists at `data/extracted-content.md`

---

### 2. Metadata Present
```bash
# Check for extraction date
head -5 data/extracted-content.md
```

✅ **PASS**: File contains:
- `# NClinic.cz - Extracted Content`
- `**Extraction Date**: YYYY-MM-DD`

---

### 3. Company Information Extracted

**Expected Fields**:
- Phone: +420 703 622 644
- Email: sestra@nclinic.cz
- Address: Zárubova 498/31, Prague 12
- ICO: [some value]
- Hours: Monday-Friday, 8:00-12:00 and 12:30-16:00

```bash
# Search for company info section
grep -A 10 "## Company Information" data/extracted-content.md
```

✅ **PASS**: All fields present with correct values

---

### 4. Services Extracted

**Expected Services** (from spec FR-004):
1. Preventive Care
2. Acute Care
3. Painless Treatment
4. Conservative Dentistry
5. Dental Hygiene

```bash
# List all service headings
grep "^### " data/extracted-content.md
```

✅ **PASS**: All 5 services listed

---

### 5. Czech Characters Preserved

**Test for diacritics**:
```bash
# Check for Czech characters
grep -i "Naším cílem" data/extracted-content.md
grep -i "úsměv" data/extracted-content.md
grep -i "Zárubova" data/extracted-content.md
```

✅ **PASS**: Czech characters (š, č, ř, ž, í, ě, ú) display correctly

---

### 6. Structured Format Validation

**Check for labeled format**:
```bash
# Verify structured labels exist
grep -E "^\*\*[A-Z][a-z]+\*\*:" data/extracted-content.md
```

✅ **PASS**: Outputs show labels like:
- `**Phone**:`
- `**Email**:`
- `**Address**:`
- `**Hours**:`
- `**ICO**:`

---

### 7. Tagline Extracted

**Expected**: "Naším cílem je váš zdravý a krásný úsměv bez bolesti"

```bash
grep -i "bez bolesti" data/extracted-content.md
```

✅ **PASS**: Clinic tagline is present

---

### 8. Doctor Information (if present)

```bash
# Check for doctors section
grep "## Doctors" data/extracted-content.md
```

✅ **PASS/SKIP**: Doctors section present if available on website, or omitted if not

---

### 9. Pricing Information (if present)

```bash
# Check for pricing section
grep "## Pricing" data/extracted-content.md
```

✅ **PASS/SKIP**: Pricing section present if available on website, or omitted if not

---

### 10. File Encoding

```bash
# Verify UTF-8 encoding
file -b --mime-encoding data/extracted-content.md
```

✅ **PASS**: Output should be `utf-8`

---

## Error Testing

### Test 1: Network Error Handling

```bash
# Disconnect network and run
# (or modify script temporarily to use invalid URL)
node scripts/extract-nclinic-data.js
```

**Expected Behavior**:
- Script attempts 3 retries
- Delays between retries visible
- Clear error message after 3 failures
- Exit code 1

✅ **PASS**: Retry logic works, error reported

---

### Test 2: Malformed URL

```bash
# Temporarily modify script URL to invalid domain
# Then run script
```

**Expected Behavior**:
- DNS resolution error
- Retry attempts
- Exit with error code 1

✅ **PASS**: Handles network errors gracefully

---

## Manual Content Verification

### Final Step: Compare with Live Website

1. Open https://www.nclinic.cz in browser
2. Open `data/extracted-content.md` in text editor
3. Verify each section:

| Website Section | Extracted? | Accurate? |
|----------------|-----------|-----------|
| Contact Phone | ☐ | ☐ |
| Contact Email | ☐ | ☐ |
| Address | ☐ | ☐ |
| Business Hours | ☐ | ☐ |
| ICO | ☐ | ☐ |
| Services List | ☐ | ☐ |
| Service Descriptions | ☐ | ☐ |
| Doctors (if present) | ☐ | ☐ |
| Pricing (if present) | ☐ | ☐ |
| Testimonials (if present) | ☐ | ☐ |
| Clinic Tagline | ☐ | ☐ |

✅ **FINAL PASS**: All content accurately extracted

---

## Troubleshooting

### Issue: "Module not found: axios"
```bash
npm install axios axios-retry cheerio
```

### Issue: "Permission denied: data/"
```bash
mkdir -p data
chmod 755 data
```

### Issue: Czech characters show as "?" or boxes
```bash
# Check terminal encoding
echo $LANG
# Should show UTF-8

# View file with explicit UTF-8
cat data/extracted-content.md
```

### Issue: Extraction fails repeatedly
1. Check internet connection
2. Verify www.nclinic.cz is accessible in browser
3. Check for firewall/proxy issues
4. Review error messages for specific HTTP errors

---

## Success Criteria

✅ All verification steps pass
✅ Output file contains all required sections
✅ Czech characters preserved correctly
✅ Structured format with clear labels
✅ Content matches live website
✅ Error handling works as expected

**Time to complete**: < 5 minutes
**Expected output size**: 5-15 KB
**Encoding**: UTF-8
