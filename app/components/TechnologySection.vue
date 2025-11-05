<script setup lang="ts">
// TechnologySection - Medical technology display matching hero vibe

interface Technology {
  name: string
  description: string
  icon: string
}

const technologies: Technology[] = [
  {
    name: 'Aplanační tonometr',
    description: 'Měření nitroočního tlaku je základem v péči o glaukomové pacienty (zelený zákal) a patří též k základnímu preventivnímu programu v naší ordinaci. Každý, kdo dovršil 40-ti let věku, by měl toto vyšetření podstoupit.',
    icon: 'pressure'
  },
  {
    name: 'Autokeratorefraktometr',
    description: 'Přístroj je nepostradatelným pomocníkem v každé oční ambulanci. Slouží k zjištění oční vady (krátkozrakost, dalekozrakost, astigmatismus) a měří parametry rohovky nutné pro správný výběr kontaktních čoček.',
    icon: 'refraction'
  },
  {
    name: 'Perimetr',
    description: 'Pomocí perimetru vyšetřujeme zorné pole. Toto vyšetření mapuje funkci sítnice, zrakového nervu a zrakové dráhy až k centru vidění v mozku. Vyšetření se též provádí u řidičů ke zjištění dostatečného periferního vidění.',
    icon: 'field'
  },
  {
    name: 'OCT',
    description: 'Tento přístroj využívá infračervené světlo k zobrazení biologických tkání v jejich příčném průřezu. Pomáhá stanovit správnou diagnózu očního onemocnění, porovnávat vyšetření v časových intervalech, naplánovat odpovídající léčbu a vyhodnotit její účinnost.',
    icon: 'oct'
  },
  {
    name: 'Pachymetr',
    description: 'Tloušťku rohovky měříme pomocí ultrazvukového přístroje – pachymetru. Její znalost je důležitá pro správné vyhodnocení zjištěného nitroočního tlaku u glaukomového onemocnění (zelený zákal). Je nezbytným parametrem i v refrakční chirurgii k rozhodnutí způsobu operace u očních vad.',
    icon: 'ultrasound'
  }
]

const getIcon = (iconType: string) => {
  const icons = {
    pressure: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    refraction: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    field: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    oct: 'M13 10V3L4 14h7v7l9-11h-7z',
    ultrasound: 'M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z M22 17.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z'
  }
  return icons[iconType as keyof typeof icons] || icons.pressure
}
</script>

<template>
  <section id="technology" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6">
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Moderní vybavení
        </span>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
        Technologie
      </h2>
      
      <p class="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Nejmodernější diagnostické přístroje pro přesnou diagnostiku a efektivní léčbu
      </p>
    </div>

    <!-- Technology Cards -->
    <div class="space-y-8">
      <div 
        v-for="(tech, index) in technologies" 
        :key="tech.name"
        class="group bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.01] hover:border-[#60AA06]/40 transition-all duration-300"
        :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      >
        <div class="lg:flex">
          <!-- Icon Section -->
          <div class="lg:w-1/3 bg-gradient-to-br from-[#60AA06]/10 to-[#60AA06]/5 p-8 lg:p-12 flex items-center justify-center">
            <div class="text-center">
              <div class="inline-flex p-6 bg-gradient-to-br from-[#60AA06]/20 to-[#60AA06]/10 rounded-3xl group-hover:from-[#60AA06]/30 group-hover:to-[#60AA06]/20 transition-all duration-300 mb-4">
                <svg 
                  class="w-16 h-16 text-[#60AA06] group-hover:scale-110 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="1.5" 
                    :d="getIcon(tech.icon)"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-black text-gray-900 group-hover:text-[#60AA06] transition-colors duration-300">
                {{ tech.name }}
              </h3>
            </div>
          </div>

          <!-- Content Section -->
          <div class="lg:w-2/3 p-8 lg:p-12">
            <div class="h-full flex flex-col justify-center">
              <p class="text-gray-700 font-medium leading-relaxed text-lg">
                {{ tech.description }}
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
.hover\:scale-\[1\.01\]:hover {
  transform: scale(1.01);
}
</style>
