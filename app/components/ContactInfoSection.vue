<script setup lang="ts">
// ContactInfoSection - Modern contact cards matching hero vibe
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6">
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Kontakt a novinky
        </span>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
        Kontaktujte nás
      </h2>
    </div>

    <!-- Content Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      
      <!-- Contact Information -->
      <div class="space-y-6">
        <div class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 bg-[#60AA06]/10 rounded-xl">
              <svg class="w-8 h-8 text-[#60AA06]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-black text-gray-900">
              Kontakt
            </h3>
          </div>

          <div class="space-y-4">
            <!-- Phone Card -->
            <a href="tel:+420734554553" class="flex items-center gap-4 p-5 rounded-xl bg-white/70 border border-[#60AA06]/10 hover:border-[#60AA06] hover:bg-white transition-all duration-200 group">
              <div class="p-3 bg-[#60AA06]/10 rounded-lg group-hover:bg-[#60AA06]/20 transition-colors">
                <svg class="w-6 h-6 text-[#60AA06]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Telefon</p>
                <p class="text-xl font-bold text-gray-900">+420 734 554 553</p>
              </div>
            </a>

            <!-- Email Card -->
            <a href="mailto:sestra@ocnipetriny.cz" class="flex items-center gap-4 p-5 rounded-xl bg-white/70 border border-[#60AA06]/10 hover:border-[#60AA06] hover:bg-white transition-all duration-200 group">
              <div class="p-3 bg-[#60AA06]/10 rounded-lg group-hover:bg-[#60AA06]/20 transition-colors">
                <svg class="w-6 h-6 text-[#60AA06]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">E-mail</p>
                <p class="text-xl font-bold text-gray-900">sestra@ocnipetriny.cz</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- News/Updates -->
      <div class="space-y-6">
        <div class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 bg-[#60AA06]/10 rounded-xl">
              <svg class="w-8 h-8 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-black text-gray-900">
              Aktuality
            </h3>
          </div>

          <div class="space-y-6">
            <!-- News Item -->
            <div class="p-6 rounded-2xl bg-gradient-to-br from-[#60AA06]/10 to-[#60AA06]/5 border border-[#60AA06]/20">
              <div class="flex items-center gap-3 mb-4">
                <span class="inline-flex items-center gap-2 bg-[#60AA06] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  Nové
                </span>
                <span class="text-sm text-gray-600 font-semibold">30. 9. 2025</span>
              </div>
              
              <h4 class="text-2xl font-black text-gray-900 mb-3">
                Příjímáme nové pacienty
              </h4>
              
              <p class="text-gray-700 font-medium leading-relaxed">
                Naše ordinace má volnou kapacitu pro nové pacienty. Objednejte se telefonicky nebo emailem.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
</style>
