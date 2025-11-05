<script setup lang="ts">
// ProceduresSection - Medical procedures display matching hero vibe

interface Procedure {
  name: string
  description: string
  icon: string
}

const procedures: Procedure[] = [
  {
    name: 'Komplexní oční vyšetření dětí a dospělých',
    description: 'Kompletní oftalmologické vyšetření včetně předpisu brýlové korekce pro všechny věkové kategorie',
    icon: 'eye'
  },
  {
    name: 'Zhotovení brýlí v naší oční optice',
    description: 'Profesionální výroba brýlí přímo v naší ordinaci s možností okamžité úpravy a servisu',
    icon: 'glasses'
  },
  {
    name: 'Vyšetření a diagnostika chorob očního segmentu',
    description: 'Diagnostika slzných cest, onemocnění rohovky, šedého zákalu, makulární degenerace, glaukomu, diabetu, hypertenze a cévních patologií',
    icon: 'search'
  },
  {
    name: 'Vyšetření a příprava k operacím',
    description: 'Předoperační příprava a objednání k operaci katarakty (šedý zákal), glaukomu (zelený zákal), sítnice a péče o pacienty po operaci',
    icon: 'surgery'
  },
  {
    name: 'Preventivní a vstupní prohlídky',
    description: 'Vyšetření na řidičský průkaz, zbrojní průkaz a další preventivní prohlídky dle požadavků',
    icon: 'shield'
  },
  {
    name: 'Vyšetření na kontaktní čočky',
    description: 'Odborné vyšetření, aplikace kontaktních čoček a pravidelné kontroly pro optimální komfort',
    icon: 'contact'
  },
  {
    name: 'Nadstandardní diagnostická vyšetření',
    description: 'Pokročilá vyšetření pomocí počítačového perimetru, OCT a pachymetru pro přesnou diagnostiku',
    icon: 'diagnostic'
  },
  {
    name: 'Léčebné programy očních onemocnění',
    description: 'Specializované léčebné programy v úzké spolupráci s prestižními očními klinikami',
    icon: 'treatment'
  }
]

const getIcon = (iconType: string) => {
  const icons = {
    eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    glasses: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    surgery: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    contact: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M12.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z',
    diagnostic: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    treatment: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
  return icons[iconType as keyof typeof icons] || icons.eye
}
</script>

<template>
  <section id="procedures" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6">
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Naše odbornost
        </span>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
        Zákroky
      </h2>
      
      <p class="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Komplexní oftalmologická péče s moderním vybavením a individuálním přístupem
      </p>
    </div>

    <!-- Procedures Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div 
        v-for="procedure in procedures" 
        :key="procedure.name"
        class="group bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] hover:border-[#60AA06]/40 transition-all duration-300"
      >
        <!-- Icon -->
        <div class="flex items-start gap-6">
          <div class="flex-shrink-0">
            <div class="p-4 bg-gradient-to-br from-[#60AA06]/20 to-[#60AA06]/10 rounded-2xl group-hover:from-[#60AA06]/30 group-hover:to-[#60AA06]/20 transition-all duration-300">
              <svg 
                class="w-8 h-8 text-[#60AA06] group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="1.5" 
                  :d="getIcon(procedure.icon)"
                />
              </svg>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-[#60AA06] transition-colors duration-300">
              {{ procedure.name }}
            </h3>
            <p class="text-gray-700 font-medium leading-relaxed">
              {{ procedure.description }}
            </p>
          </div>
        </div>

        <!-- Hover Effect Indicator -->
        <div class="mt-6 flex items-center gap-2 text-[#60AA06] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span class="text-sm font-bold">Více informací</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <div class="bg-gradient-to-r from-[#60AA06]/10 to-[#60AA06]/5 rounded-3xl border-2 border-[#60AA06]/20 p-8 backdrop-blur-md">
        <h3 class="text-2xl font-black text-gray-900 mb-4">
          Potřebujete konzultaci?
        </h3>
        <p class="text-gray-700 font-medium mb-6 max-w-2xl mx-auto">
          Naši odborníci jsou připraveni poskytnout vám profesionální péči a odpovědět na všechny vaše otázky
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:+420734554553" 
            class="inline-flex items-center gap-3 px-8 py-4 bg-[#60AA06] text-white font-bold rounded-2xl hover:bg-[#60AA06]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +420 734 554 553
          </a>
          <a 
            href="mailto:sestra@ocnipetriny.cz" 
            class="inline-flex items-center gap-3 px-8 py-4 bg-white/80 text-[#60AA06] font-bold rounded-2xl border-2 border-[#60AA06]/20 hover:bg-white hover:border-[#60AA06]/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            sestra@ocnipetriny.cz
          </a>
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
