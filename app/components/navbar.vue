<template>
  <!-- Premium Translucent Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg"
  >
    <div class="max-w-7xl lg:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a @click="smoothScrollTo('hero')" class="flex items-center gap-3 cursor-pointer group">
              <!-- Eye Icon -->
              <div class="relative">
                <svg 
                  class="w-8 h-8 text-[#60AA06] transform group-hover:scale-110 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="1.5" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="1.5" 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              <!-- Oční Petřiny Text -->
              <div class="flex items-center gap-2">
                <span class="text-2xl font-black text-gray-900">Oční</span>
                <span class="text-2xl font-black text-[#60AA06]">Petřiny</span>
              </div>
            </a>
          </div>

                    <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a
                @click="smoothScrollTo('hero')"
                class="text-gray-700 hover:text-[#60AA06] px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
                >Domů</a
              >
              <a
                @click="smoothScrollTo('opening-clinic')"
                class="text-gray-700 hover:text-[#60AA06] px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
                >Klinika</a
              >
              <a
                @click="smoothScrollTo('our-team')"
                class="text-gray-700 hover:text-[#60AA06] px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
                >Lékaři</a
              >
              <a
                @click="smoothScrollTo('services')"
                class="text-gray-700 hover:text-[#60AA06] px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
                >Služby</a
              >
              <a
                @click="smoothScrollTo('footer')"
                class="text-gray-700 hover:text-[#60AA06] px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
                >Kontakt</a
              >
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white/30 focus:outline-none transition-all duration-300"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Hamburger icon with morphing animation -->
              <div class="relative w-6 h-6 flex items-center justify-center">
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
                ></span>
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
                ></span>
                <span 
                  class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
                  :class="isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden overflow-hidden">
          <div
            class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-white/30"
          >
          <a
            @click="smoothScrollTo('hero')"
            class="text-gray-700 hover:text-[#60AA06] block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
            >Domů</a
          >            
          <a
            @click="smoothScrollTo('opening-clinic')"
            class="text-gray-700 hover:text-[#60AA06] block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
            >Klinika</a
          >
          
          <a
            @click="smoothScrollTo('our-team')"
            class="text-gray-700 hover:text-[#60AA06] block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
            >Lékaři</a
          >
          <a
            @click="smoothScrollTo('services')"
            class="text-gray-700 hover:text-[#60AA06] block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
            >Služby</a
          >
          <a
            @click="smoothScrollTo('footer')"
            class="text-gray-700 hover:text-[#60AA06] block px-3 py-2 text-base font-semibold transition-all duration-300 hover:bg-[#60AA06]/10 rounded-lg cursor-pointer"
            >Kontakt</a
          >
          </div>
        </div>
      </transition>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

// Smooth scroll function
const smoothScrollTo = (sectionId) => {
  // Close mobile menu if open
  isMobileMenuOpen.value = false;
  
  // Find the target section
  const targetSection = document.getElementById(sectionId);
  
  if (targetSection) {
    // Get navbar height for offset (adjust this value based on your navbar height)
    const navbarHeight = 80; // Approximate navbar height in pixels
    
    // Get the splitter element within the section (usually the first decorative element)
    const splitter = targetSection.querySelector('.inline-flex.items-center.space-x-4') || targetSection;
    
    // Calculate position with offset
    const elementPosition = splitter.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    // Premium smooth scroll with longer duration
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for premium feel
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smooth, premium feel
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  }
};
</script>
