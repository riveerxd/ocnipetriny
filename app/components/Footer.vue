<script setup lang="ts">
// Footer component - Modern design matching hero vibe
</script>

<template>
  <footer id="footer" class="w-full bg-white/90 backdrop-blur-xl border-t-2 border-[#60AA06]/20 shadow-xl py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 gap-12 mb-12">
        
        <!-- Left: Logo and Description -->
        <div class="space-y-6 text-center md:text-left">
          <a href="#hero" class="inline-flex items-center gap-3 group">
            <!-- Eye Icon -->
            <div class="relative">
              <svg 
                class="w-10 h-10 text-[#60AA06] transform group-hover:scale-110 transition-all duration-300" 
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
          
          <p class="text-gray-700 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
            Moderní péče o váš zrak s lidským přístupem. Profesionální oftalmologická ordinace v Praze 6.
          </p>
        </div>

        <!-- Right: Company Header (Hlavička) -->
        <div class="space-y-2 text-center md:text-right text-gray-700 font-medium">
          <div class="text-lg font-bold text-gray-900">Oční Petřiny s.r.o.</div>
          <div class="text-base font-semibold">Oční ordinace</div>
          <div>Stamicova 21, 162 00 Praha 6</div>
          <div>IČ: 17558379</div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-[#60AA06]/10"></div>

      <!-- Bottom: Copyright and Company Info -->
      <div class="mt-8 grid md:grid-cols-2 gap-6 items-center">
        <div class="text-center md:text-left text-gray-600 font-medium">
          <p>© {{ new Date().getFullYear() }} Oční Petřiny s.r.o. Všechna práva vyhrazena.</p>
        </div>
        
        <div class="text-center md:text-right text-gray-600 font-medium">
          <p>
            Made by 
            <a href="#" class="text-[#60AA06] hover:text-[#6DBE07] font-bold transition-colors">
              river
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Smooth transitions */
a {
  transition: all 0.2s ease;
}
</style>
