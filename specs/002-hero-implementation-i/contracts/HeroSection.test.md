# Manual Test Contract: HeroSection Component

**Feature**: 002-hero-implementation-i
**Component**: HeroSection.vue
**Test Type**: Manual Verification (per constitution - no automated tests for presentational components)

## Test Environment Setup

### Prerequisites
- Nuxt dev server running (`npm run dev`)
- Chrome DevTools open
- Responsive design mode enabled
- Network throttling available
- Lighthouse extension installed

### Browser Testing Matrix
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## Test Scenarios

### Test 1: Desktop Rendering (>1024px) ✅

**Given**: User visits site on desktop browser
**When**: Page loads at 1920x1080 resolution
**Then**: Hero section should meet all requirements

**Steps**:
1. Open `http://localhost:3000` in Chrome
2. Set viewport to 1920x1080 (DevTools → Responsive)
3. Hard reload (Cmd+Shift+R / Ctrl+Shift+F5)

**Expected Results**:
- [  ] Hero section is first visible element
- [  ] Content width is 80% of viewport (~1536px)
- [  ] Content is horizontally centered
- [  ] Hero height is 80vh (~864px at 1080px height)
- [  ] "NClinic" text is prominently displayed
- [  ] Slogan "Naším cílem je váš zdravý a krásný úsměv bez bolesti" is visible
- [  ] Slogan is in Czech with correct diacritics (š, č, ř, ž, í, ě, ú)
- [  ] Slide-in animation triggers on load
- [  ] Animation completes within 0.5 seconds
- [  ] No layout shift during animation (content space reserved)
- [  ] Background is translucent (inherits from layout)

**Pass Criteria**: All checkboxes checked

---

### Test 2: Tablet Rendering (640-1024px) ✅

**Given**: User visits site on tablet
**When**: Page loads at 768px width
**Then**: Hero section adapts to tablet layout

**Steps**:
1. Resize browser to 768px width (or use iPad simulator)
2. Hard reload

**Expected Results**:
- [  ] Content width is 90% of viewport (~691px)
- [  ] Content remains horizontally centered
- [  ] Hero height remains 80vh
- [  ] Typography scales appropriately
- [  ] Slide-in animation still smooth
- [  ] No horizontal scroll
- [  ] Czech characters render correctly

**Pass Criteria**: All checkboxes checked

---

### Test 3: Mobile Rendering (<640px) ✅

**Given**: User visits site on mobile device
**When**: Page loads at 375px width (iPhone SE)
**Then**: Hero section adapts to mobile layout

**Steps**:
1. Resize browser to 375px width (or use mobile simulator)
2. Hard reload

**Expected Results**:
- [  ] Content width is 100% of viewport
- [  ] Appropriate padding on left/right (~16px)
- [  ] Hero height remains 80vh (proportional to mobile viewport)
- [  ] Typography is readable (not too small)
- [  ] "NClinic" text does not overflow
- [  ] Slogan wraps appropriately
- [  ] Animation performs well (no jank)
- [  ] No horizontal scroll

**Pass Criteria**: All checkboxes checked

---

### Test 4: Reduced Motion Preference ✅

**Given**: User has enabled "prefers-reduced-motion"
**When**: Page loads with reduced motion preference
**Then**: Hero section respects motion preference

**Steps (macOS)**:
1. System Settings → Accessibility → Display → Reduce Motion (ON)
2. Refresh browser

**Steps (Windows)**:
1. Settings → Accessibility → Visual effects → Animation effects (OFF)
2. Refresh browser

**Steps (Chrome DevTools)**:
1. Open DevTools → Cmd+Shift+P → "Emulate CSS prefers-reduced-motion"
2. Select "prefers-reduced-motion: reduce"
3. Refresh browser

**Expected Results**:
- [  ] No slide-in animation plays
- [  ] Content appears immediately (no delay)
- [  ] Hero section is fully visible on load
- [  ] Functionality is not impaired
- [  ] Layout matches animated version (no style differences)

**Pass Criteria**: All checkboxes checked

---

### Test 5: Accessibility (WCAG AA) ✅

**Given**: User navigates with keyboard and/or screen reader
**When**: User interacts with the page
**Then**: Hero section meets accessibility requirements

**Steps**:
1. Open page in browser
2. Close mouse/trackpad
3. Press Tab key repeatedly
4. Use VoiceOver (macOS) or NVDA (Windows)

**Expected Results**:
- [  ] Hero section does not trap keyboard focus
- [  ] Tab key skips hero (no interactive elements)
- [  ] Screen reader announces "NClinic" heading
- [  ] Screen reader announces slogan text
- [  ] Text contrast ratio meets WCAG AA (4.5:1 minimum)
- [  ] Heading uses semantic HTML (`<h1>` for "NClinic")
- [  ] No accessibility errors in Chrome DevTools → Accessibility panel

**Pass Criteria**: All checkboxes checked

**Contrast Ratio Verification**:
1. Open Chrome DevTools → Elements
2. Inspect "NClinic" text
3. Check computed styles → Color
4. Use built-in contrast ratio checker
5. Verify ≥ 4.5:1 for normal text, ≥ 3:1 for large text (≥18pt)

---

### Test 6: Performance (Core Web Vitals) ✅

**Given**: User loads page on slow network
**When**: Page loads with throttled network
**Then**: Hero section meets performance requirements

**Steps**:
1. Open Chrome DevTools → Network
2. Throttle to "Slow 3G" (400 Kbps)
3. Clear cache (DevTools → Application → Clear storage)
4. Hard reload (disable cache option checked)
5. Run Lighthouse audit (DevTools → Lighthouse)

**Expected Results**:
- [  ] Hero text visible within 2.5 seconds (LCP ≤ 2.5s)
- [  ] No layout shift during load (CLS < 0.1)
- [  ] Page interactive within 3 seconds (TTI ≤ 3s)
- [  ] First Contentful Paint (FCP) < 1.8s
- [  ] Lighthouse Performance score > 90
- [  ] No blocking resources delay hero render
- [  ] Font loads quickly (preloaded WOFF2)

**Lighthouse Thresholds**:
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

**Pass Criteria**: All checkboxes checked + Lighthouse scores meet thresholds

---

### Test 7: Cross-Browser Compatibility ✅

**Given**: User visits site in different browsers
**When**: Page loads in each browser
**Then**: Hero section renders consistently

**Steps**:
1. Test in Chrome (latest)
2. Test in Firefox (latest)
3. Test in Safari (latest)
4. Test in Edge (latest)

**Expected Results (per browser)**:
- [  ] Layout identical across browsers
- [  ] Typography renders correctly
- [  ] Czech characters display properly
- [  ] Animation performs smoothly (or respects reduced motion)
- [  ] Colors match design
- [  ] Spacing consistent

**Pass Criteria**: All checkboxes checked for all 4 browsers

---

### Test 8: Edge Cases ✅

**Given**: User has non-standard browser configuration
**When**: Page loads with edge case conditions
**Then**: Hero section handles gracefully

**Test 8.1: Very Large Font Size**
1. Browser settings → Increase font size to 200%
2. Reload page
3. **Expected**: Hero remains readable, no overflow, layout adapts

**Test 8.2: Very Wide Monitor (3440px)**
1. Resize to 3440px width
2. Reload page
3. **Expected**: Content still 80% width (~2752px), max-width applies if needed, no awkward stretching

**Test 8.3: Very Narrow Viewport (320px)**
1. Resize to 320px width (iPhone SE in landscape)
2. Reload page
3. **Expected**: Content 100% width, padding preserves readability, no horizontal scroll

**Test 8.4: Disabled JavaScript**
1. Disable JavaScript in browser settings
2. Reload page
3. **Expected**: Hero still renders (SSR), no animation (acceptable), content visible

**Test 8.5: Print**
1. Open print preview (Cmd+P / Ctrl+P)
2. **Expected**: Hero prints cleanly, no unnecessary whitespace, colors print-friendly

**Pass Criteria**: All 5 edge cases handled gracefully

---

## Acceptance Criteria Summary

### Must Pass (Blocking)
- ✅ Test 1: Desktop rendering
- ✅ Test 2: Tablet rendering
- ✅ Test 3: Mobile rendering
- ✅ Test 4: Reduced motion
- ✅ Test 5: Accessibility
- ✅ Test 6: Performance (Lighthouse > 90)

### Should Pass (Non-Blocking but Important)
- ✅ Test 7: Cross-browser compatibility
- ✅ Test 8: Edge cases

---

## Test Sign-Off

| Test | Tester | Date | Pass/Fail | Notes |
|------|--------|------|-----------|-------|
| Test 1: Desktop | | | | |
| Test 2: Tablet | | | | |
| Test 3: Mobile | | | | |
| Test 4: Reduced Motion | | | | |
| Test 5: Accessibility | | | | |
| Test 6: Performance | | | | |
| Test 7: Cross-Browser | | | | |
| Test 8: Edge Cases | | | | |

**Final Verdict**: [ ] PASS / [ ] FAIL

**Sign-Off**: _________________ Date: _________

---

## Debugging Tips

### Animation Not Triggering
1. Check browser console for errors
2. Verify `useSlideInAnimation` composable is called
3. Check `isVisible` ref changes to `true` in Vue DevTools
4. Inspect CSS classes applied (should have transition classes)

### Layout Not Responsive
1. Check Tailwind classes applied correctly (`w-full`, `sm:w-[90%]`, `lg:w-[80%]`)
2. Verify no conflicting CSS overrides
3. Check viewport meta tag in `<head>`

### Performance Issues
1. Run Lighthouse and check "Opportunities" section
2. Verify font preloading in Network tab
3. Check for blocking scripts
4. Measure CLS in DevTools Performance panel

### Czech Characters Not Displaying
1. Check font includes Latin Extended subset
2. Verify UTF-8 encoding (`<meta charset="UTF-8">`)
3. Inspect font-family in DevTools Computed styles
4. Test with different fonts as fallback
