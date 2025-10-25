# Implementation Plan: Modern Hero Component

**Branch**: `002-hero-implementation-i` | **Date**: 2025-10-06 | **Spec**: [spec.md](/home/river/Projects/nclinic.cz/specs/002-hero-implementation-i/spec.md)
**Input**: Feature specification from `/home/river/Projects/nclinic.cz/specs/002-hero-implementation-i/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → ✅ Spec loaded successfully
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → ✅ No remaining NEEDS CLARIFICATION markers (5 clarifications resolved)
   → Project Type: Web application (Nuxt 4 SPA)
   → Structure Decision: Nuxt app/ directory structure
3. Fill the Constitution Check section
   → ✅ Completed based on constitution.md
4. Evaluate Constitution Check section
   → ✅ No violations detected
   → Update Progress Tracking: Initial Constitution Check PASS
5. Execute Phase 0 → research.md
   → ✅ In progress
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, CLAUDE.md
   → Pending Phase 0 completion
7. Re-evaluate Constitution Check section
   → Pending Phase 1 completion
8. Plan Phase 2 → Describe task generation approach
   → Pending Phases 0-1 completion
9. STOP - Ready for /tasks command
```

## Summary
Implement a modern hero component as the first element on the NClinic.cz website main page. The hero will display the clinic name "NClinic" with distinctive typography and the slogan "Naším cílem je váš zdravý a krásný úsměv bez bolesti" in Czech. The component features slide-in animations, responsive width constraints (100% mobile, 90% tablet, 80% desktop), 80vh height, and inherits background from the parent layout. This establishes the visual foundation and width pattern for all main content sections.

## Technical Context
**Language/Version**: TypeScript + Vue 3.5.18 Composition API
**Primary Dependencies**: Nuxt 4.0.3, Tailwind CSS 6.14.0, vue3-smooth-scroll 0.8.1
**Storage**: N/A (presentational component only, uses extracted data from data/extracted-content.md)
**Testing**: Manual testing per constitution (no unit tests for presentational components)
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge) with mobile-first responsive design
**Project Type**: Web SPA (Nuxt 4 single-page application)
**Performance Goals**:
  - LCP < 2.5s (hero is above-fold, critical for LCP)
  - CLS < 0.1 (no layout shift during animation)
  - TTI < 3s (hero must be interactive quickly)
**Constraints**:
  - All UI text in Czech language
  - All code/comments in English
  - Respect prefers-reduced-motion
  - WCAG AA contrast ratios
  - No blocking JavaScript for hero render
**Scale/Scope**: Single hero component, foundation for ~6-8 future page sections

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Performance First ✅ PASS
- **Page load < 2s on 3G**: Hero component design supports this
  - Inline critical CSS for hero
  - Defer animation JavaScript
  - No images in hero (text-only)
- **TTI < 3s**: ✅ Hero is lightweight Vue component
- **LCP < 2.5s**: ✅ Hero text renders immediately (no image loading)
- **Zero blocking JS**: ✅ Animation logic can be deferred
- **Images optimized**: ✅ N/A (no images in hero)
- **Bundle size minimized**: ✅ Code splitting per constitution

### II. Single-Page Application Architecture ✅ PASS
- **One main page**: ✅ Hero is first section of single-page app
- **Navigation scrolls to sections**: ✅ Hero component doesn't affect this (handled by navigation)
- **Smooth scroll behavior**: ✅ Constitution already mandates this site-wide
- **Deep linking support**: ✅ Not applicable to hero (no section ID needed, it's always first)
- **No page reloads**: ✅ Hero is part of SPA

### III. Modern, Clean Design ✅ PASS
- **Clean, minimalist design**: ✅ Slide-in animations, ample whitespace (translucent background)
- **Professional color palette**: ✅ Inherits layout background (deferred to layout component)
- **Responsive design**: ✅ Breakpoints at 640px/1024px, mobile-first
- **WCAG 2.1 AA**: ✅ FR-015 requires AA contrast ratios
- **Consistent typography**: ✅ FR-012 requires distinctive but consistent typography
- **Micro-interactions**: ✅ Slide-in animations on load

### IV. Content Preservation & Migration ✅ PASS
- **Service descriptions preserved**: ✅ Slogan extracted from data/extracted-content.md
- **Contact information accurate**: ✅ Not in hero (future sections)
- **No content loss**: ✅ Using extracted slogan text

### V. Component-Based Architecture ✅ PASS
- **Separate component**: ✅ Hero will be `HeroSection.vue`
- **Self-contained and reusable**: ✅ Component accepts slogan as prop (reusable structure)
- **Props clearly typed**: ✅ TypeScript with Composition API
- **Shared UI elements**: ✅ Typography will use Tailwind utility classes
- **CSS via Tailwind**: ✅ Tailwind already configured
- **Testable in isolation**: ✅ Manual testing per constitution

**Gate Result**: ✅ PASS - No constitutional violations

## Project Structure

### Documentation (this feature)
```
specs/002-hero-implementation-i/
├── spec.md              # Feature specification (complete)
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (pending)
├── data-model.md        # Phase 1 output (pending)
├── quickstart.md        # Phase 1 output (pending)
├── contracts/           # Phase 1 output (pending)
└── tasks.md             # Phase 2 output (/tasks command)
```

### Source Code (repository root)
```
app/
├── components/
│   └── HeroSection.vue          # NEW: Main hero component
├── composables/
│   └── useAnimation.ts          # NEW: Animation composable (respects prefers-reduced-motion)
├── layouts/
│   └── default.vue              # MODIFIED: Add hero to layout or main page
├── pages/
│   └── index.vue                # MODIFIED: Main page includes HeroSection
└── app.vue                      # Existing root component

public/
└── (no changes - text-only hero)

nuxt.config.ts                   # Existing config
tailwind.config.js               # MODIFIED: Add hero-specific utilities if needed
```

**Structure Decision**: Using Nuxt 4 `app/` directory structure with Vue 3 Composition API. The hero component follows Nuxt conventions: `components/HeroSection.vue` for the main component, `composables/useAnimation.ts` for animation logic. The component will be imported in `pages/index.vue` as the first element of the single-page application.

## Phase 0: Outline & Research

### Research Questions
1. **Vue 3 Composition API slide-in animation patterns**
   - Decision needed: CSS transitions vs. GSAP vs. Vue Transition API
   - Best practice for prefers-reduced-motion detection
   - Performance implications of different animation approaches

2. **Tailwind responsive breakpoints alignment**
   - Decision: Use custom breakpoints (640px, 1024px) or Tailwind defaults (sm:640px, lg:1024px)
   - Rationale needed: Custom vs standard approach
   - Alternative: CSS custom properties for breakpoints

3. **Viewport height (vh) units in Nuxt 4 SSR**
   - Issue: SSR doesn't know client viewport
   - Decision: Client-side only rendering for hero height or CSS fallback
   - Best practice: Hydration handling for vh units

4. **Czech language font rendering and typography**
   - Decision: Font selection for Czech diacritics (š, č, ř, ž, í, ě, ú)
   - Best practice: Google Fonts with Czech character set
   - Performance: WOFF2 preload strategy

5. **Translucent background implementation**
   - Decision: CSS backdrop-filter vs. opacity vs. alpha channel
   - Performance: backdrop-filter impact on paint performance
   - Fallback: Non-supporting browsers (older Safari)

### Research Tasks
```
Task 1: Research Vue 3 Composition API animation patterns
  → Find: onMounted hook + CSS transitions best practice
  → Find: prefers-reduced-motion detection in Vue composable
  → Find: Performance benchmarks (CSS vs JS animations)

Task 2: Research Tailwind custom breakpoints
  → Find: Tailwind config for custom breakpoints
  → Find: Industry standard 640px/1024px precedent
  → Alternative: Use default sm/lg and accept slight mismatch

Task 3: Research Nuxt 4 SSR + viewport units
  → Find: Client-only rendering for vh-dependent components
  → Find: CSS fallback strategies (min-height + viewport units)
  → Alternative: Use fixed pixel heights with media queries

Task 4: Research Czech typography
  → Find: Google Fonts with full Czech character support
  → Find: Font pairing for medical/professional aesthetic
  → Alternative: System font stack with Czech fallback

Task 5: Research translucent backgrounds
  → Find: CSS backdrop-filter browser support (caniuse.com)
  → Find: Performance impact of backdrop-filter
  → Alternative: Simple opacity with solid background fallback
```

**Output**: research.md with consolidated findings

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

### 1. Data Model (data-model.md)
Since this is a presentational component with no database entities, the data model describes the component props and local state:

**Entities**:
- `HeroSectionProps`: Component input interface
  - `clinicName`: string (default: "NClinic")
  - `slogan`: string (from extracted data)
  - `animationEnabled`: boolean (optional, defaults to checking prefers-reduced-motion)

- `HeroAnimationState`: Local reactive state
  - `isVisible`: boolean (tracks if component is mounted)
  - `reducedMotion`: boolean (from media query)

### 2. Contracts
No API contracts needed (presentational component), but we'll define the component interface contract:

**Component Contract**:
```typescript
// contracts/HeroSection.contract.ts
interface HeroSectionProps {
  clinicName?: string;
  slogan: string;
}

interface HeroSectionEmits {
  // No emits - presentational only
}

interface HeroSectionSlots {
  // No slots - self-contained
}
```

### 3. Contract Tests
Manual testing scenarios instead of automated tests (per constitution):

```markdown
# contracts/HeroSection.test.md

## Manual Test Scenarios

### Test 1: Desktop Rendering (>1024px)
- Open in Chrome at 1920x1080
- Expected: Content width 80%, centered, 80vh height
- Expected: Slide-in animation completes within 0.5s
- Expected: Czech characters render correctly

### Test 2: Tablet Rendering (640-1024px)
- Resize to 768px width
- Expected: Content width 90%, centered
- Expected: Animation still smooth

### Test 3: Mobile Rendering (<640px)
- Resize to 375px width
- Expected: Content width 100%, appropriate padding
- Expected: Typography readable and scaled

### Test 4: Reduced Motion
- Enable prefers-reduced-motion in browser/OS
- Refresh page
- Expected: No slide-in animation, content appears immediately
- Expected: Hero still visible and functional

### Test 5: Accessibility
- Tab through page with keyboard
- Expected: Hero doesn't trap focus (no interactive elements)
- Expected: Text has AA contrast ratio

### Test 6: Performance
- Throttle to Slow 3G in DevTools
- Hard reload
- Expected: Hero text visible within 2.5s (LCP)
- Expected: No layout shift (CLS < 0.1)
```

### 4. Quickstart (quickstart.md)
Step-by-step verification guide for the hero component after implementation.

### 5. Agent Context Update
Run `.specify/scripts/bash/update-agent-context.sh claude` to update CLAUDE.md with:
- Current tech: Vue 3.5.18 Composition API, Nuxt 4, Tailwind CSS
- Recent changes: Added HeroSection component with slide-in animations
- Keep under 150 lines for efficiency

**Output**: data-model.md, contracts/HeroSection.contract.ts, contracts/HeroSection.test.md, quickstart.md, CLAUDE.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
1. **Load template**: `.specify/templates/tasks-template.md`
2. **Generate from design**:
   - Create HeroSection.vue component structure
   - Implement responsive width constraints (Tailwind classes)
   - Implement 80vh height
   - Add slide-in animation logic
   - Create useAnimation composable
   - Handle prefers-reduced-motion
   - Ensure translucent background inheritance
   - Integrate slogan from extracted data
   - Add to main page (pages/index.vue)
3. **Generate test tasks** from contracts/HeroSection.test.md:
   - Manual test on desktop (>1024px)
   - Manual test on tablet (640-1024px)
   - Manual test on mobile (<640px)
   - Test reduced motion
   - Test accessibility
   - Performance test (Lighthouse)
4. **Ordering**:
   - Setup: Create component files
   - Core: Implement layout and responsiveness
   - Enhancement: Add animations
   - Integration: Add to main page
   - Testing: Manual verification per contract tests
5. **Parallelization**: Most tasks are sequential (same file), mark independent tests as [P]

**Estimated Output**: ~15-20 numbered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md)
  - Create HeroSection.vue with TypeScript + Composition API
  - Implement responsive Tailwind classes
  - Create useAnimation composable
  - Add to pages/index.vue
  - Test per contract scenarios
**Phase 5**: Validation (manual testing, Lighthouse performance check)

## Complexity Tracking
*No constitutional violations - table not needed*

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [X] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: Pending Phase 1
- [X] All NEEDS CLARIFICATION resolved (5 clarifications documented)
- [X] Complexity deviations documented (none)

---
*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
