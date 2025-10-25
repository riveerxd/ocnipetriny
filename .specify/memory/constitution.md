<!--
Sync Impact Report:
Version: 1.0.0 (initial constitution)
Created: 2025-10-06
Modified Principles: N/A (new constitution)
Added Sections:
  - Core Principles (5 principles)
  - Performance Standards
  - Development Workflow
  - Governance
Removed Sections: N/A
Templates Status:
  ✅ .specify/templates/plan-template.md - aligned with constitution principles
  ✅ .specify/templates/spec-template.md - aligned with constitution principles
  ✅ .specify/templates/tasks-template.md - aligned with constitution principles
Follow-up TODOs: None
-->

# NClinic.cz Remake Constitution

## Core Principles

### I. Performance First (NON-NEGOTIABLE)
The current site's slow performance is the primary reason for this remake. Every feature, component, and design decision MUST be evaluated for performance impact. Requirements:
- Page load time MUST be under 2 seconds on 3G networks
- Time to Interactive (TTI) MUST be under 3 seconds
- Largest Contentful Paint (LCP) MUST be under 2.5 seconds
- Zero blocking JavaScript on initial load
- All images MUST be optimized and lazy-loaded
- Bundle size MUST be minimized through code splitting

**Rationale**: User experience is directly tied to performance. Medical service websites require immediate access to information and contact details.

### II. Single-Page Application Architecture
This MUST be a single-page application (SPA) with smooth scroll navigation. Requirements:
- One main page with all content sections
- Navigation items scroll to corresponding sections on the page
- Smooth scroll behavior for all navigation interactions
- Deep linking support for direct section access via URL fragments
- Browser back/forward navigation MUST work with sections
- No page reloads except initial load

**Rationale**: Seamless navigation enhances user experience and reduces friction when users need to quickly access different services or contact information.

### III. Modern, Clean Design
The redesign MUST deliver a modern, professional aesthetic appropriate for a medical practice. Requirements:
- Clean, minimalist design with ample whitespace
- Professional color palette (medical blues/greens recommended)
- Responsive design: mobile-first approach
- Accessibility compliance (WCAG 2.1 AA minimum)
- Consistent typography and spacing system
- Micro-interactions for enhanced UX (subtle animations, hover states)

**Rationale**: First impressions matter in healthcare. A modern, clean design builds trust and professionalism.

### IV. Content Preservation & Migration
All essential information from the current nclinic.cz website MUST be extracted and migrated. Requirements:
- All service descriptions MUST be preserved
- Contact information (phone, email, address, hours) MUST be accurate
- Pricing information MUST be maintained if present
- Any testimonials or reviews MUST be migrated
- Images MUST be extracted and optimized
- No content loss during migration

**Rationale**: Continuity is essential for existing patients and SEO. All valuable content must be retained.

### V. Component-Based Architecture
Build using Vue 3 composition API with reusable, testable components. Requirements:
- Each major section MUST be a separate component
- Components MUST be self-contained and reusable
- Props and emits MUST be clearly typed
- Shared UI elements (buttons, cards, forms) MUST be in a components library
- CSS MUST use Tailwind utility classes for consistency
- Component logic MUST be testable in isolation

**Rationale**: Maintainability and scalability require modular architecture. Components enable faster iteration and easier testing.

## Performance Standards

All performance requirements from Principle I are mandatory gates before deployment:

- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: Initial bundle < 200KB gzipped
- **Images**: All images < 200KB, WebP format with fallbacks
- **Fonts**: WOFF2 format, preloaded, max 2 font families
- **JavaScript**: Code splitting by route/section, deferred non-critical JS
- **CSS**: Critical CSS inlined, remaining CSS lazy-loaded

Performance testing MUST be performed on:
- Slow 3G network (400kbps)
- Fast 3G network (1.5Mbps)
- Desktop broadband

## Development Workflow

### Testing Requirements
- **Manual Testing**: Test all navigation scrolling on mobile and desktop
- **Visual Testing**: Cross-browser testing (Chrome, Firefox, Safari, Edge)
- **Accessibility Testing**: Keyboard navigation, screen reader compatibility
- **Performance Testing**: Lighthouse CI scores > 90 for all categories

### Content Extraction Process
1. Document all current sections and content from nclinic.cz
2. Extract images and media assets
3. Verify contact information accuracy
4. Organize content into section components
5. Review with stakeholder before implementation

### Deployment Gates
- [ ] All Core Web Vitals pass thresholds
- [ ] Lighthouse performance score > 90
- [ ] Lighthouse accessibility score > 90
- [ ] Manual testing on mobile and desktop complete
- [ ] All content migrated and verified
- [ ] Contact information accuracy confirmed

## Governance

### Amendment Process
1. Proposed changes MUST be documented with clear rationale
2. Performance impact MUST be assessed for any architectural changes
3. Team approval required for principle modifications
4. Version bump according to semantic versioning

### Compliance
- All PRs MUST verify compliance with performance standards
- Design decisions that violate principles MUST be explicitly justified
- Performance regressions are blocking issues
- Accessibility violations are blocking issues

### Constitution Authority
This constitution supersedes all other development practices. When conflicts arise, constitution principles take precedence. Justified exceptions MUST be documented in implementation plans.

**Version**: 1.0.0 | **Ratified**: 2025-10-06 | **Last Amended**: 2025-10-06
