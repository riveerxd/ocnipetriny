# Tasks: Modern Hero Component

**Feature**: 002-hero-implementation-i
**Input**: Design documents from `/specs/002-hero-implementation-i/`
**Prerequisites**: plan.md (complete), research.md (complete), data-model.md (complete), contracts/ (complete)

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → Tech stack: TypeScript + Vue 3.5.18 Composition API, Nuxt 4.0.3, Tailwind CSS 6.14.0
   → Structure: Nuxt app/ directory with components/ and composables/
2. Load optional design documents:
   → data-model.md: HeroSectionProps, HeroAnimationState entities
   → contracts/: HeroSection.contract.ts, HeroSection.test.md (manual tests)
   → research.md: CSS transitions, Tailwind defaults, Inter font, vh units
3. Generate tasks by category:
   → Setup: Component files, composable structure
   → Core: Layout, typography, responsive widths
   → Enhancement: Animations, reduced motion support
   → Integration: Add to main page, load slogan data
   → Testing: Manual verification per contracts
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Manual tests before polish
5. Number tasks sequentially (T001, T002...)
6. Validate: All contracts tested, all entities have implementation
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- Nuxt 4 app/ directory structure
- Components: `app/components/`
- Composables: `app/composables/`
- Pages: `app/pages/`
- Config: root directory

## Phase 3.1: Setup

- [X] T001 [P] Create HeroSection component file at app/components/HeroSection.vue with basic Vue 3 Composition API structure
- [X] T002 [P] Create useSlideInAnimation composable at app/composables/useSlideInAnimation.ts with TypeScript interfaces

## Phase 3.2: Core Layout & Typography

- [X] T003 Implement responsive width constraints in app/components/HeroSection.vue using Tailwind classes: w-full (mobile), sm:w-[90%] (tablet), lg:w-[80%] (desktop)
- [X] T004 Implement 80vh height constraint and horizontal centering in app/components/HeroSection.vue using min-h-[80vh] and mx-auto
- [X] T005 Add clinic name "NClinic" heading with distinctive typography in app/components/HeroSection.vue
- [X] T006 Implement translucent background (bg-transparent) in app/components/HeroSection.vue to inherit from layout
- [X] T007 Configure Inter font loading in nuxt.config.ts with Latin Extended subset and preload for Czech character support

## Phase 3.3: Props & Data Integration

- [X] T008 Define component props interface (clinicName, slogan, animationEnabled) in app/components/HeroSection.vue following contracts/HeroSection.contract.ts
- [X] T009 Load slogan from data/extracted-content.md and pass as prop to HeroSection in app/pages/index.vue

## Phase 3.4: Animation Implementation

- [X] T010 Implement useSlideInAnimation composable logic in app/composables/useSlideInAnimation.ts: onMounted hook, isVisible ref, reducedMotion ref
- [X] T011 Add prefers-reduced-motion detection via matchMedia API in app/composables/useSlideInAnimation.ts
- [X] T012 Implement CSS transitions for slide-in animation in app/components/HeroSection.vue (transform, opacity, 0.5s duration)
- [X] T013 Connect useSlideInAnimation composable to HeroSection component template with conditional transition classes

## Phase 3.5: Integration

- [X] T014 Add HeroSection component to app/pages/index.vue as the first element on the main page
- [X] T015 Verify Czech characters (š, č, ř, ž, í, ě, ú) render correctly in slogan text

## Phase 3.6: Manual Testing (per contracts/HeroSection.test.md)

- [X] T016 [P] Manual Test 1: Desktop rendering (>1024px) - verify 80% width, 80vh height, centered, slide-in animation, Czech characters
- [X] T017 [P] Manual Test 2: Tablet rendering (640-1024px) - verify 90% width, centered, smooth animation
- [X] T018 [P] Manual Test 3: Mobile rendering (<640px) - verify 100% width, appropriate padding, readable typography
- [X] T019 [P] Manual Test 4: Reduced motion - enable prefers-reduced-motion, verify no animation, content appears immediately
- [X] T020 [P] Manual Test 5: Accessibility - keyboard navigation, screen reader, WCAG AA contrast ratios
- [X] T021 [P] Manual Test 6: Performance - Lighthouse test with Slow 3G, verify LCP < 2.5s, CLS < 0.1, Performance score > 90

## Phase 3.7: Polish

- [X] T022 Run quickstart.md verification guide (5-minute check: dev server, files exist, visual check, responsive check, accessibility, performance)
- [X] T023 [P] Verify edge cases from spec.md: large font sizes, wide monitors (3440px+), narrow viewport (320px), print layout
- [X] T024 Remove any code duplication or unused variables

## Dependencies

- Setup (T001-T002) before all other tasks
- T003-T007 (layout) before T008-T009 (props)
- T008-T009 (props) before T010-T013 (animations)
- T010-T013 (animations) before T014 (integration)
- T014-T015 (integration) before T016-T021 (testing)
- All implementation before T022-T024 (polish)

## Parallel Execution Examples

### Setup Phase (T001-T002)
```
Task: "Create HeroSection component file at app/components/HeroSection.vue with basic Vue 3 Composition API structure"
Task: "Create useSlideInAnimation composable at app/composables/useSlideInAnimation.ts with TypeScript interfaces"
```

### Manual Testing Phase (T016-T021)
```
Task: "Manual Test 1: Desktop rendering - verify 80% width, 80vh height, centered, slide-in animation, Czech characters"
Task: "Manual Test 2: Tablet rendering - verify 90% width, centered, smooth animation"
Task: "Manual Test 3: Mobile rendering - verify 100% width, appropriate padding, readable typography"
Task: "Manual Test 4: Reduced motion - enable prefers-reduced-motion, verify no animation"
Task: "Manual Test 5: Accessibility - keyboard navigation, screen reader, WCAG AA contrast"
Task: "Manual Test 6: Performance - Lighthouse test, verify LCP < 2.5s, CLS < 0.1, score > 90"
```

## Notes

- Tasks T003-T007 modify same file (HeroSection.vue) so NOT marked [P]
- Tasks T010-T013 split between composable and component - T010-T011 can run in parallel with T012, then T013 depends on both
- Manual tests (T016-T021) are independent and marked [P] for parallel execution
- All code must be in English, all UI text must be in Czech per FR-004 and FR-005
- Animation must respect prefers-reduced-motion per FR-014
- Minimum Performance score: 90 (Lighthouse)
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, TTI < 3s

## Task Generation Rules Applied

1. **From Contracts**:
   - HeroSection.contract.ts → T001 (component creation), T008 (props interface)
   - HeroSection.test.md → T016-T021 (manual test scenarios)

2. **From Data Model**:
   - HeroSectionProps entity → T008 (props implementation)
   - HeroAnimationState entity → T010 (composable state)

3. **From Research**:
   - CSS transitions decision → T012 (animation implementation)
   - Tailwind breakpoints → T003 (responsive widths)
   - Inter font → T007 (font configuration)
   - vh units in SSR → T004 (height implementation)

4. **From Spec**:
   - FR-003 (slogan) → T009 (data integration)
   - FR-011 (slide-in) → T010-T013 (animation tasks)
   - FR-018 (80vh) → T004 (height constraint)
   - Edge cases → T023 (edge case testing)

## Validation Checklist

- [X] All contracts have corresponding tasks (HeroSection.contract.ts → T001, T008)
- [X] All entities have implementation tasks (HeroSectionProps → T008, HeroAnimationState → T010)
- [X] Manual tests come before polish (T016-T021 before T022-T024)
- [X] Parallel tasks truly independent (different files or independent test scenarios)
- [X] Each task specifies exact file path
- [X] No task modifies same file as another [P] task
- [X] All research decisions mapped to tasks
- [X] All functional requirements have implementation tasks

## Success Criteria

**Minimum Requirements** (from quickstart.md):
- ✅ All 24 tasks completed
- ✅ Lighthouse Performance score > 90
- ✅ No console errors or warnings
- ✅ Hero visible on desktop, tablet, and mobile
- ✅ Czech characters render correctly
- ✅ All 6 manual tests pass (T016-T021)

**Ready for Production**:
- ✅ All edge cases handled (T023)
- ✅ Cross-browser compatibility verified
- ✅ Quickstart verification passed (T022)
