<script setup lang="ts">
// ServicesSection - Modern services display matching hero vibe

interface Service {
  name: string
  price: string
  note?: string
}

interface ServiceCategory {
  title: string
  subtitle?: string
  services: Service[]
}

const categories: ServiceCategory[] = [
  {
    title: 'Zákroky nehrazené zdravotní pojišťovnou',
    subtitle: 'Vyšetření a služby mimo standardní pojištění',
    services: [
      { name: 'Vyšetření na řidičský průkaz', price: '800 Kč' },
      { name: 'Vyšetření na řidičský průkaz - Senioři', price: '800 Kč' },
      { name: 'Vyšetření na zbrojní průkaz', price: '1500 Kč' },
      { name: 'Preventivní prohlídky pro zaměstnavatele', price: '1000 Kč', note: 'cílené vyšetření pro zaměstnavatele nebo jiné nezdravotnické instituce' },
      { name: 'Výpis karty', price: '300 Kč' },
      { name: 'Sepsání potvrzení', price: '800 Kč', note: 'které nesouvisí s léčebnou činností' },
      { name: 'Vyšetření OCT – sítnice, obě oči', price: '700 Kč' },
      { name: 'Vyšetření samoplátců - nepojištěných klientů', price: '2000 Kč', note: 'preventivní' }
    ]
  },
  {
    title: 'Plastická operace očních víček',
    subtitle: 'Profesionální chirurgické zákroky pro mladistvý vzhled',
    services: [
      { name: 'Horních víček', price: '15 000 Kč' },
      { name: 'Dolních víček', price: '15 000 Kč' }
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
        Ceník
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
            <div class="flex items-center gap-3 mb-2">
              <div class="p-2 bg-[#60AA06]/20 rounded-lg">
                <svg class="w-6 h-6 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                {{ category.title }}
              </h3>
            </div>
            <p v-if="category.subtitle" class="text-gray-600 ml-14 text-base">
              {{ category.subtitle }}
            </p>
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

    <!-- Insurance Notice -->
    <div class="mt-16">
      <div class="bg-gradient-to-r from-[#60AA06]/10 to-[#60AA06]/5 rounded-3xl border-2 border-[#60AA06]/20 p-8 backdrop-blur-md text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="p-3 bg-[#60AA06]/20 rounded-xl">
            <svg class="w-8 h-8 text-[#60AA06]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-gray-900">
            Spolupracujeme se všemi pojišťovnami
          </h3>
        </div>
        <p class="text-xl font-bold text-[#60AA06] mb-2">
          Vše zdarma!!
        </p>
        <p class="text-gray-700 font-medium max-w-2xl mx-auto">
          Standardní oftalmologická vyšetření jsou plně hrazena zdravotními pojišťovnami
        </p>
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
