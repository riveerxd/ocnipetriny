# Research: Modern Hero Component

**Feature**: 002-hero-implementation-i
**Date**: 2025-10-06

## Research Questions

### 1. Vue 3 Composition API Slide-in Animation Patterns

**Decision**: CSS transitions with Vue Composition API `onMounted` hook

**Rationale**:
- CSS transitions are more performant than JavaScript animations (GPU-accelerated)
- Vue's reactivity system can toggle CSS classes without heavy JS libraries
- `prefers-reduced-motion` can be detected via CSS media query or JavaScript `matchMedia`
- Simpler debugging and smaller bundle size compared to GSAP

**Implementation Pattern**:
```typescript
// composables/useAnimation.ts
import { ref, onMounted } from 'vue'

export function useSlideInAnimation() {
  const isVisible = ref(false)
  const reducedMotion = ref(false)

  onMounted(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.value = mediaQuery.matches

    // Trigger animation on next frame (allow CSS to apply initial state)
    requestAnimationFrame(() => {
      isVisible.value = true
    })
  })

  return { isVisible, reducedMotion }
}
```

**Alternatives Considered**:
- **GSAP**: More powerful but adds 50KB+ to bundle, overkill for simple slide-in
- **Vue Transition API**: Good for enter/leave, but less control over timing
- **Framer Motion**: React-specific, not applicable

---

### 2. Tailwind Responsive Breakpoints Alignment

**Decision**: Use Tailwind default breakpoints (sm:640px, lg:1024px) - they match our requirements exactly

**Rationale**:
- Tailwind defaults: `sm: 640px`, `md: 768px`, `lg: 1024px`
- Our clarifications: Mobile <640px, Tablet 640-1024px, Desktop >1024px
- Perfect alignment - no custom configuration needed
- Reduces cognitive load (standard Tailwind naming)
- Better ecosystem compatibility (Tailwind plugins expect defaults)

**Implementation**:
```vue
<template>
  <section class="w-full sm:w-[90%] lg:w-[80%] mx-auto">
    <!-- Hero content -->
  </section>
</template>
```

**Alternatives Considered**:
- **Custom breakpoints**: Would require modifying `tailwind.config.js`, adds complexity
- **CSS custom properties**: More verbose, less tooling support
- **Media queries in <style>**: Defeats purpose of Tailwind utility-first approach

---

### 3. Viewport Height (vh) Units in Nuxt 4 SSR

**Decision**: Use `min-h-[80vh]` with client-side hydration (no special handling needed)

**Rationale**:
- Nuxt 4 handles hydration automatically - vh units work fine in SSR
- SSR renders with vh units, client hydrates with actual viewport
- Only issue would be if server and client vh differed significantly (not a concern here)
- `min-h-[80vh]` ensures content doesn't overflow if taller than 80vh

**Implementation**:
```vue
<template>
  <section class="min-h-[80vh] flex items-center justify-center">
    <!-- Hero content vertically centered -->
  </section>
</template>
```

**Alternatives Considered**:
- **Client-only component**: Unnecessary complexity, adds hydration delay
- **CSS fallback with calc()**: Not needed, vh is well-supported
- **Fixed pixel heights**: Would break responsive design

**Note**: If mobile viewport height issues arise (e.g., mobile browser address bar), we can use CSS `dvh` (dynamic viewport height) which adjusts for browser UI, but `vh` is sufficient for MVP.

---

### 4. Czech Language Font Rendering and Typography

**Decision**: Use Inter font family from Google Fonts (WOFF2, preloaded)

**Rationale**:
- Inter has excellent Czech diacritic support (š, č, ř, ž, í, ě, ú)
- Modern, clean aesthetic appropriate for medical/professional context
- Variable font option available (reduces HTTP requests)
- Google Fonts CDN with WOFF2 compression
- ~30KB for Latin Extended subset

**Font Pairing**:
- **Heading (NClinic)**: Inter Bold (700 weight)
- **Slogan**: Inter Regular (400 weight)
- **Fallback stack**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`

**Implementation**:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext'
        }
      ]
    }
  }
})
```

**Alternatives Considered**:
- **Roboto**: Good Czech support but less modern feel
- **Poppins**: Trendy but less professional for medical context
- **System fonts only**: Would save bytes but less distinctive branding

---

### 5. Translucent Background Implementation

**Decision**: Simple transparency with `bg-transparent` or no background (inherit from parent)

**Rationale**:
- Specification says "translucent, inherits layout background"
- No need for `backdrop-filter` (which has performance cost and limited support)
- Hero component should be transparent, layout provides the actual background
- Simpler implementation, better performance, wider browser support

**Implementation**:
```vue
<template>
  <section class="bg-transparent"> <!-- or no bg class at all -->
    <!-- Hero content -->
  </section>
</template>
```

**Alternatives Considered**:
- **backdrop-filter: blur()**: Performance-intensive, ~92% browser support, not needed per spec
- **Semi-transparent overlay**: Would require alpha channel color, but spec says "inherit" not "overlay"
- **Opacity on entire section**: Would affect text readability

**Note**: If layout background needs to show through with some transparency, the layout component will handle that, not the hero.

---

## Technology Stack Summary

| Component | Technology | Version | Rationale |
|-----------|-----------|---------|-----------|
| Framework | Nuxt | 4.0.3 | Already configured, SSR + SPA hybrid |
| UI Framework | Vue | 3.5.18 | Composition API for cleaner logic |
| Styling | Tailwind CSS | 6.14.0 | Utility-first, responsive design |
| Animations | CSS Transitions | Native | Performance, no extra dependencies |
| Typography | Inter (Google Fonts) | Variable | Czech support, modern aesthetic |
| Animation Detection | matchMedia API | Native | Prefers-reduced-motion support |

## Implementation Approach Summary

1. **Component Structure**:
   - `app/components/HeroSection.vue` - Main presentational component
   - `app/composables/useSlideInAnimation.ts` - Animation logic composable

2. **Styling Strategy**:
   - Tailwind utility classes for responsive widths (`w-full`, `sm:w-[90%]`, `lg:w-[80%]`)
   - `min-h-[80vh]` for height constraint
   - CSS transitions for slide-in animation (transform + opacity)
   - `prefers-reduced-motion` media query handling

3. **Content Integration**:
   - Slogan passed as prop from parent component
   - Parent reads from `data/extracted-content.md` at build time

4. **Performance Optimizations**:
   - Preload Inter font (WOFF2, Latin Extended subset only)
   - CSS transitions (GPU-accelerated)
   - No JavaScript blocking initial render
   - Lazy animation trigger via `requestAnimationFrame`

## Known Constraints

- No images in hero (text-only) per spec
- All UI text must be in Czech
- All code/comments in English
- Must respect `prefers-reduced-motion`
- WCAG AA contrast ratios required
- Target: LCP < 2.5s, CLS < 0.1, TTI < 3s

## Next Steps (Phase 1)

1. Create data-model.md with component props interface
2. Create contracts/HeroSection.contract.ts with TypeScript interfaces
3. Create contracts/HeroSection.test.md with manual test scenarios
4. Create quickstart.md with implementation verification steps
5. Update CLAUDE.md with current tech stack
