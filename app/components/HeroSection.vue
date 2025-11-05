<script setup lang="ts">
// HeroSection - Premium Optical Clinic Design for OcniPetriny.cz
import { ref, onMounted } from 'vue'

export interface HeroSectionProps {
  clinicName?: string
  slogan?: string
  phone?: string
  email?: string
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  clinicName: 'Oční Petřiny',
  slogan: 'Moderní péče o váš zrak s lidským přístupem',
  phone: '+420 734 554 553',
  email: 'sestra@ocnipetriny.cz'
})

const mounted = ref(false)
onMounted(() => {
  setTimeout(() => {
    mounted.value = true
  }, 100)
})
</script>

<template>
  <section id="hero" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-10 pb-20">
    
    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-12">

        <!-- Premium Badge -->
         <!--
        <div 
          :class="[
            'inline-flex items-center gap-3 px-6 py-3 rounded-full',
            'bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20',
            'shadow-lg transition-all duration-1000',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          ]"
        >
          <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
          <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
            Špičková oční péče
          </span>
        </div>
        -->
        <!-- Main Heading with Eye Icon Integration -->
        <div 
          :class="[
            'space-y-6 transition-all duration-1000 delay-200',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <!-- Clinic Name -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none">
            <span>Oční </span><span class="text-[#60AA06]">Petřiny</span>
          </h1>

          <!-- Slogan -->
          <p class="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            {{ slogan }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div 
          :class="[
            'flex flex-col sm:flex-row items-center justify-center gap-6',
            'transition-all duration-1000 delay-400',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <!-- Primary CTA - Call -->
          <a 
            :href="`tel:${phone.replace(/\s/g, '')}`"
            class="group relative w-full sm:w-auto"
          >
            <div class="absolute inset-0 bg-[#60AA06] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative px-12 py-6 bg-[#60AA06] hover:bg-[#6DBE07] rounded-2xl font-bold text-xl text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Zavolat nyní</span>
            </div>
          </a>

          <!-- Secondary CTA - Email -->
          <a 
            :href="`mailto:${email}?subject=Objednání%20-%20Oční%20Petřiny&body=Dobrý%20den,%0A%0Arád(a)%20bych%20se%20objednal(a)%20na%20vyšetření.%0A%0AJméno:%0ATelefon:%0APožadovaný%20termín:%0A%0ADěkuji`"
            class="group relative w-full sm:w-auto"
          >
            <div class="relative px-12 py-6 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl font-bold text-xl text-gray-900 border-2 border-[#60AA06]/30 hover:border-[#60AA06] shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
              <svg class="w-7 h-7 text-[#60AA06]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>Napsat e-mail</span>
            </div>
          </a>
        </div>

        <!-- Trust Badges -->
        <div 
          :class="[
            'flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8',
            'transition-all duration-1000 delay-600',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <!-- Badge 1 -->
          <div class="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md rounded-xl border border-[#60AA06]/20 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-semibold text-gray-800">Certifikovaní lékaři</span>
          </div>

          <!-- Badge 2 -->
          <div class="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md rounded-xl border border-[#60AA06]/20 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="text-sm font-semibold text-gray-800">Moderní technologie</span>
          </div>

          <!-- Badge 3 -->
          <div class="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-md rounded-xl border border-[#60AA06]/20 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-semibold text-gray-800">Rychlé termíny</span>
          </div>
        </div>

        

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div 
      :class="[
        'absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000',
        mounted ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <div class="flex flex-col items-center gap-2 animate-bounce-slow">
        <span class="text-xs text-gray-500 font-medium uppercase tracking-wider">Scroll</span>
        <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Slow bounce animation for scroll indicator */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

/* Smooth transitions */
a {
  will-change: transform;
}
</style>

