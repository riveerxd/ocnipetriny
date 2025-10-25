<script setup lang="ts">
// ServicesSection - Modern services display matching hero vibe

interface Service {
  name: string
  price: string
  note?: string
}

interface ServiceCategory {
  title: string
  services: Service[]
}

const categories: ServiceCategory[] = [
  {
    title: 'Záchovná stomatologie',
    services: [
      { name: 'Fotokompozitní výplň dle rozsahu', price: 'od 2200 Kč' },
      { name: 'Skloionomerní výplň 1 kapsle', price: 'od 1500 Kč' },
      { name: 'Provizorní výplň', price: 'od 500 Kč' }
    ]
  },
  {
    title: 'Endodoncie',
    services: [
      { name: 'Endodontické ošetření fáze dle počtu kanálků', price: 'od 950 Kč' },
      { name: 'Endodontické ošetření 2.fáze plnění (za kanálek)', price: 'od 1250 Kč' },
      { name: 'Reendodontické ošetření 1 kanálek', price: 'od 1250 Kč' }
    ]
  },
  {
    title: 'Protetika',
    services: [
      { name: 'Korunka metalokeramická', price: 'od 8500 Kč' },
      { name: 'Korunka celokeramická', price: 'od 10000 Kč' },
      { name: 'Provizorní korunka', price: 'od 1100 Kč' },
      { name: 'FRC čep a dostavba', price: 'od 2500 Kč' },
      { name: 'Otisk alginát', price: 'od 600 Kč' },
      { name: 'Otisk C silikon', price: 'od 750 Kč' },
      { name: 'Cementace na definitivní cement', price: 'od 650 Kč' },
      { name: 'Cementace na provizorní cement', price: 'od 400 Kč' }
    ]
  },
  {
    title: 'Chirurgie',
    services: [
      { name: 'Anestezie (mimo ZP)', price: 'od 220 Kč' },
      { name: 'Komplikovaná extrakce', price: 'od 1500 Kč' },
      { name: 'Chirurgická extrakce', price: 'od 2500 Kč' },
      { name: 'Šití', price: 'od 450 Kč' }
    ]
  },
  {
    title: 'Ceník dentální hygieny 2024',
    services: [
      { name: 'Vstupní dentální hygiena pro děti od 16 a pro dospělé', price: '1990 Kč', note: '1h' },
      { name: 'Vstupní dentální hygiena pro děti 6-16 let', price: '1190 Kč', note: '30 min' },
      { name: 'Vstupní dentální hygiena pro děti 0-6 let', price: '990 Kč', note: '30 min' },
      { name: 'Pravidelná dentální hygiena (recall) pro děti od 16 let a dospělé', price: '1490 Kč', note: '30 min' },
      { name: 'Pravidelná dentální (recall) pro děti 6-16 let', price: '1090 Kč', note: '30 min' },
      { name: 'Pravidelná dentální hygiena (recall) pro děti 0-6 let', price: '790 Kč', note: '30 min' },
      { name: 'Deep scaling, hloubkové čištění parodontálních chobotů', price: '200 Kč za 1 zub / 1 kvadrant 1400 Kč', note: '45min' }
    ]
  }
]
</script>

<template>
  <section id="services" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6">
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Ceník služeb
        </span>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
        Naše služby
      </h2>
      
      <p class="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Komplexní péče o vaše zdraví s moderním vybavením a zkušenými odborníky
      </p>
    </div>

    <!-- Service Categories -->
    <div class="space-y-8">
      <div v-for="category in categories" :key="category.title">
        <!-- Category Card -->
        <div class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
          
          <!-- Category Header -->
          <div class="bg-gradient-to-r from-[#60AA06]/10 to-[#60AA06]/5 border-b-2 border-[#60AA06]/10 p-6">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-[#60AA06]/20 rounded-lg">
                <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                {{ category.title }}
              </h3>
            </div>
          </div>

          <!-- Services Grid -->
          <div class="p-6 md:p-8">
            <div class="grid md:grid-cols-2 gap-4">
              <div 
                v-for="service in category.services" 
                :key="service.name"
                class="p-5 rounded-xl bg-white/70 border border-[#60AA06]/10 hover:border-[#60AA06]/30 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div class="flex justify-between items-start gap-4">
                  <div class="flex-1">
                    <h4 class="font-bold text-gray-900 text-base leading-snug mb-1">
                      {{ service.name }}
                    </h4>
                    <p v-if="service.note" class="text-xs text-gray-600 font-medium italic mt-1">
                      {{ service.note }}
                    </p>
                  </div>
                  
                  <!-- Price Display -->
                  <div class="text-right flex-shrink-0">
                    <div v-if="service.price.includes('/')" class="space-y-1">
                      <div v-for="(pricePart, index) in service.price.split(' / ')" :key="index" class="text-sm font-black text-[#60AA06] whitespace-nowrap">
                        {{ pricePart }}
                      </div>
                    </div>
                    <span v-else class="text-lg font-black text-[#60AA06] whitespace-nowrap">
                      {{ service.price }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Note -->
    <div class="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#60AA06]/10 to-[#60AA06]/5 border border-[#60AA06]/20">
      <div class="flex items-start gap-3">
        <svg class="w-6 h-6 text-[#60AA06] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Informace o cenách</h4>
          <p class="text-sm text-gray-700 font-medium leading-relaxed">
            Uvedené ceny jsou orientační. Přesnou cenu vám sdělíme po vyšetření. Pro více informací nás kontaktujte telefonicky nebo e-mailem.
          </p>
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
