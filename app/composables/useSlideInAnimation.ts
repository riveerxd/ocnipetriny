import { ref, onMounted, type Ref } from 'vue'

/**
 * Return type of the useSlideInAnimation composable
 */
export interface SlideInAnimationOptions {
  /**
   * Reactive ref tracking if component is visible (triggers animation)
   */
  isVisible: Ref<boolean>

  /**
   * Reactive ref tracking if user prefers reduced motion
   */
  reducedMotion: Ref<boolean>
}

/**
 * Composable for handling slide-in animations with prefers-reduced-motion support
 *
 * @returns {SlideInAnimationOptions} Object with isVisible and reducedMotion refs
 */
export function useSlideInAnimation(): SlideInAnimationOptions {
  const isVisible = ref(false)
  const reducedMotion = ref(false)

  onMounted(() => {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      reducedMotion.value = mediaQuery.matches

      // Listen for changes to the media query
      const handleChange = (event: MediaQueryListEvent) => {
        reducedMotion.value = event.matches
      }
      mediaQuery.addEventListener('change', handleChange)

      // Trigger animation on next frame (allows CSS to apply initial state)
      requestAnimationFrame(() => {
        isVisible.value = true
      })
    }
  })

  return {
    isVisible,
    reducedMotion
  }
}
