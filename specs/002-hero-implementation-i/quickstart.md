# Quickstart: Modern Hero Component

**Feature**: 002-hero-implementation-i
**Purpose**: Quick verification guide after implementing the hero component

## Prerequisites

- Nuxt 4 dev server running
- Chrome browser (or Firefox/Safari for cross-browser testing)
- Node.js v18+ installed

## Quick Start (5 Minutes)

### 1. Start Development Server

```bash
# Navigate to project root
cd /home/river/Projects/nclinic.cz

# Install dependencies (if not already done)
npm install

# Start dev server
npm run dev
```

**Expected Output**:
```
Nuxt 4.0.3 with Nitro 2.x.x
Local:    http://localhost:3000/
```

---

### 2. Verify Hero Component Exists

```bash
# Check component file
ls -la app/components/HeroSection.vue

# Check composable file
ls -la app/composables/useSlideInAnimation.ts

# Check main page integration
grep -i "HeroSection" app/pages/index.vue
```

**Expected**: All files exist, `HeroSection` is imported in `index.vue`

---

### 3. Visual Verification (Desktop)

1. Open `http://localhost:3000` in Chrome
2. Open DevTools (F12 or Cmd+Option+I)
3. Set viewport to 1920x1080 (DevTools → Toggle Device Toolbar)

**✅ PASS Checklist**:
- [  ] Hero section is visible at top of page
- [  ] "NClinic" heading is prominently displayed
- [  ] Czech slogan is visible: "Naším cílem je váš zdravý a krásný úsměv bez bolesti"
- [  ] Czech characters render correctly (š, č, ř, ž, í, ě, ú)
- [  ] Content is centered horizontally
- [  ] Content width appears to be ~80% of viewport
- [  ] Hero height is approximately 80% of viewport height
- [  ] Slide-in animation played on load

---

### 4. Responsive Verification (Mobile)

1. In DevTools, resize viewport to 375px width (iPhone SE)
2. Hard reload (Cmd+Shift+R / Ctrl+Shift+F5)

**✅ PASS Checklist**:
- [  ] Hero adapts to mobile layout
- [  ] Content uses full width with padding
- [  ] Typography is readable
- [  ] No horizontal scroll
- [  ] Animation still works smoothly

---

### 5. Accessibility Quick Check

1. Enable "prefers-reduced-motion" in Chrome DevTools:
   - Cmd+Shift+P → "Emulate CSS prefers-reduced-motion"
   - Select "prefers-reduced-motion: reduce"
2. Reload page

**✅ PASS Checklist**:
- [  ] No animation plays
- [  ] Content appears immediately
- [  ] Hero is still fully functional

---

### 6. Performance Quick Check

1. Open Chrome DevTools → Lighthouse
2. Select "Performance" category
3. Click "Analyze page load"

**✅ PASS Checklist**:
- [  ] Performance score > 90
- [  ] LCP (Largest Contentful Paint) < 2.5s
- [  ] CLS (Cumulative Layout Shift) < 0.1
- [  ] No accessibility errors

---

## Troubleshooting

### Issue: Hero Not Visible

**Solution**:
```bash
# Check if HeroSection is imported in index.vue
cat app/pages/index.vue | grep -i "HeroSection"

# Check component syntax
cat app/components/HeroSection.vue | head -20
```

### Issue: Animation Not Working

**Solution**:
```bash
# Check if composable is used
cat app/components/HeroSection.vue | grep -i "useSlideInAnimation"

# Check browser console for errors
# Open DevTools → Console → Look for red errors
```

### Issue: Czech Characters Broken

**Solution**:
```bash
# Check nuxt.config.ts for font configuration
cat nuxt.config.ts | grep -A 5 "Inter"

# Verify meta charset in rendered HTML
curl -s http://localhost:3000 | grep "charset"
# Should output: <meta charset="utf-8">
```

### Issue: Layout Not Responsive

**Solution**:
```bash
# Check Tailwind classes in component
cat app/components/HeroSection.vue | grep -i "w-full\|sm:w-\|lg:w-"

# Verify Tailwind config has correct breakpoints
cat tailwind.config.js
```

---

## Full Manual Test Suite

For comprehensive testing, see:
- [contracts/HeroSection.test.md](contracts/HeroSection.test.md)

This includes:
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Edge case testing (very wide monitors, large fonts, etc.)
- Detailed accessibility testing
- Performance benchmarking

---

## Verification Table

Use this table to quickly track verification progress:

| Step | Description | Status | Notes |
|------|-------------|--------|-------|
| 1 | Dev server running | ⬜ | |
| 2 | Files exist | ⬜ | |
| 3 | Desktop visual check | ⬜ | |
| 4 | Mobile responsive check | ⬜ | |
| 5 | Accessibility check | ⬜ | |
| 6 | Performance check | ⬜ | |

**Legend**: ⬜ Not Started | ✅ Pass | ❌ Fail

---

## Success Criteria

**Minimum Requirements** (must pass before merging):
- ✅ All 6 quickstart steps pass
- ✅ Lighthouse Performance score > 90
- ✅ No console errors or warnings
- ✅ Hero visible on desktop and mobile
- ✅ Czech characters render correctly

**Recommended** (should pass for production):
- ✅ All manual tests in contracts/HeroSection.test.md pass
- ✅ Cross-browser testing complete (4 browsers)
- ✅ Edge cases handled gracefully

---

## Next Steps After Quickstart

1. **If all checks pass**: Run full manual test suite (contracts/HeroSection.test.md)
2. **If issues found**: Debug using troubleshooting section above
3. **After full testing**: Sign off on test contract
4. **Ready for production**: Create PR and deploy

---

## Time Estimates

- **Quickstart verification**: ~5 minutes
- **Full manual test suite**: ~30-45 minutes
- **Cross-browser testing**: +15 minutes (additional)
- **Total verification time**: ~45-60 minutes

---

## Contact/Support

If you encounter issues not covered here:
1. Check component implementation against data-model.md
2. Review research.md for technical decisions
3. Consult spec.md for original requirements
4. Check constitution.md for performance standards
