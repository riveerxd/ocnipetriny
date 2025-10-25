/**
 * Component Contract: HeroSection
 *
 * This file defines the TypeScript interfaces for the HeroSection component.
 * It serves as the contract between the component and its consumers.
 */

import { Ref } from 'vue';

/**
 * Props accepted by the HeroSection component
 */
export interface HeroSectionProps {
  /**
   * The clinic name to display (default: "NClinic")
   */
  clinicName?: string;

  /**
   * The clinic slogan in Czech language (required)
   * Example: "Naším cílem je váš zdravý a krásný úsměv bez bolesti"
   */
  slogan: string;

  /**
   * Override animation behavior (optional)
   * If undefined, auto-detects from prefers-reduced-motion
   */
  animationEnabled?: boolean;
}

/**
 * No emits - this is a presentational component
 */
export interface HeroSectionEmits {
  // No events emitted
}

/**
 * No slots - component is self-contained
 */
export interface HeroSectionSlots {
  // No slots
}

/**
 * Return type of the useSlideInAnimation composable
 */
export interface SlideInAnimationOptions {
  /**
   * Reactive ref tracking if component is visible (triggers animation)
   */
  isVisible: Ref<boolean>;

  /**
   * Reactive ref tracking if user prefers reduced motion
   */
  reducedMotion: Ref<boolean>;
}

/**
 * Internal animation state (not exported, but documented for reference)
 */
interface HeroAnimationState {
  isVisible: boolean;
  reducedMotion: boolean;
}
