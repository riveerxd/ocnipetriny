# Data Model: Modern Hero Component

**Feature**: 002-hero-implementation-i
**Date**: 2025-10-06

## Overview

This document describes the data entities for the hero component. Since this is a presentational component with no backend or database, the "entities" are TypeScript interfaces defining component props and internal state.

## Entities

### 1. HeroSectionProps

Represents the input props for the HeroSection component.

**Fields**:
- `clinicName`: string (optional) - The clinic name to display
  - Default: "NClinic"
  - Validation: Non-empty string
- `slogan`: string (required) - The clinic slogan in Czech
  - Example: "Naším cílem je váš zdravý a krásný úsměv bez bolesti"
  - Validation: Non-empty string, must contain Czech characters
- `animationEnabled`: boolean (optional) - Override animation behavior
  - Default: Automatically determined from `prefers-reduced-motion`
  - Validation: Boolean

**TypeScript Definition**:
```typescript
interface HeroSectionProps {
  clinicName?: string;
  slogan: string;
  animationEnabled?: boolean;
}
```

**Default Values**:
```typescript
{
  clinicName: 'NClinic',
  animationEnabled: undefined // Auto-detect from media query
}
```

---

### 2. HeroAnimationState

Represents the internal reactive state for managing animations.

**Fields**:
- `isVisible`: boolean - Tracks if component is mounted and animation should trigger
  - Initial: `false`
  - Changes to `true` after mount (triggers CSS animation)
- `reducedMotion`: boolean - Tracks user's motion preferences
  - Initial: `false`
  - Set from `matchMedia('(prefers-reduced-motion: reduce)')`
  - If `true`, animations are disabled

**TypeScript Definition**:
```typescript
interface HeroAnimationState {
  isVisible: boolean;
  reducedMotion: boolean;
}
```

**State Transitions**:
```
1. Component created
   → isVisible = false, reducedMotion = false

2. Component mounted (onMounted hook)
   → Check media query
   → reducedMotion = mediaQuery.matches
   → requestAnimationFrame(() => isVisible = true)

3. Animation completes
   → isVisible remains true
   → No further state changes
```

---

### 3. SlideInAnimationOptions (Composable Return Type)

Represents the return type of the `useSlideInAnimation` composable.

**Fields**:
- `isVisible`: Ref<boolean> - Reactive reference to visibility state
- `reducedMotion`: Ref<boolean> - Reactive reference to motion preference

**TypeScript Definition**:
```typescript
import { Ref } from 'vue';

interface SlideInAnimationOptions {
  isVisible: Ref<boolean>;
  reducedMotion: Ref<boolean>;
}
```

---

## Relationships

```
HeroSection.vue
├── Props: HeroSectionProps
│   ├── clinicName (optional, default "NClinic")
│   ├── slogan (required, from extracted data)
│   └── animationEnabled (optional, auto-detect)
│
└── Uses: useSlideInAnimation()
    └── Returns: SlideInAnimationOptions
        ├── isVisible (Ref<boolean>)
        └── reducedMotion (Ref<boolean>)
```

---

## Data Flow

```
1. Parent component (pages/index.vue)
   ↓
2. Passes slogan prop to HeroSection
   ↓
3. HeroSection.vue mounts
   ↓
4. useSlideInAnimation() composable runs
   ↓
5. Checks prefers-reduced-motion
   ↓
6. Sets isVisible = true (triggers CSS animation)
   ↓
7. CSS transitions handle visual animation
   ↓
8. Animation completes, no further state changes
```

---

## Validation Rules

### HeroSectionProps Validation

| Field | Rule | Error Message |
|-------|------|---------------|
| `clinicName` | Non-empty string if provided | "Clinic name must be a non-empty string" |
| `slogan` | Required, non-empty string | "Slogan is required" |
| `slogan` | Must contain valid Czech characters | "Slogan must contain Czech text" |
| `animationEnabled` | Boolean if provided | "Animation enabled must be boolean" |

### Runtime Validation (Development Only)

```typescript
// Only in development mode for helpful error messages
if (process.env.NODE_ENV === 'development') {
  if (props.slogan && props.slogan.trim().length === 0) {
    console.error('[HeroSection] Slogan prop is required and must not be empty');
  }
}
```

---

## State Lifecycle

### Initialization
```typescript
// Component setup()
const { isVisible, reducedMotion } = useSlideInAnimation();
// isVisible = false, reducedMotion = false
```

### Mount
```typescript
// onMounted hook in useSlideInAnimation()
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  reducedMotion.value = mediaQuery.matches; // true or false

  requestAnimationFrame(() => {
    isVisible.value = true; // Triggers CSS transition
  });
});
```

### Unmount
```typescript
// No cleanup needed (no event listeners, no timers)
// Vue handles ref cleanup automatically
```

---

## No Database Entities

This component does not interact with any backend or database. All data is:
- Passed as props from parent component
- Read from static extracted data file (`data/extracted-content.md`)
- Managed as local component state (reactive refs)

---

## Data Volume Estimate

- Props: 3 properties (~50 bytes)
- State: 2 boolean refs (~2 bytes)
- Total memory: Negligible (<1KB per component instance)
- Instances: 1 (single hero section per page)

---

## Performance Considerations

1. **Props are readonly**: Component doesn't mutate props (Vue best practice)
2. **Minimal state**: Only 2 reactive boolean refs (low reactivity overhead)
3. **No watchers**: State changes are event-driven (onMounted only)
4. **No computed properties**: Simple boolean flags, no derived state
5. **No emits**: Presentational component, no parent communication

---

## Testing Data

### Valid Test Cases

```typescript
// Test 1: Minimal required props
{
  slogan: "Naším cílem je váš zdravý a krásný úsměv bez bolesti"
}

// Test 2: All props provided
{
  clinicName: "NClinic Praha",
  slogan: "Naším cílem je váš zdravý a krásný úsměv bez bolesti",
  animationEnabled: true
}

// Test 3: Animation disabled
{
  slogan: "Naším cílem je váš zdravý a krásný úsměv bez bolesti",
  animationEnabled: false
}
```

### Invalid Test Cases (Development Warnings)

```typescript
// Test 1: Missing slogan
{
  clinicName: "NClinic"
  // ERROR: slogan is required
}

// Test 2: Empty slogan
{
  slogan: ""
  // ERROR: slogan must not be empty
}

// Test 3: Invalid type
{
  slogan: 12345
  // TypeScript error: Type 'number' is not assignable to type 'string'
}
```
