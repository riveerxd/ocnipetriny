<script setup lang="ts">
// TeamSection - Modern team display matching hero vibe

interface TeamMember {
  name: string
  role: string
  badge: string
  description?: string
}

const team: TeamMember[] = [
  {
    name: 'MUDr. Drahoslava Petříková',
    role: 'Oční lékařka',
    badge: 'Lékařka',
    description: 'Odbornice s dlouholetými zkušenostmi v oftalmologii'
  },
  {
    name: 'Hana Vorlová',
    role: 'Zdravotní sestra',
    badge: 'Sestra',
    description: 'Profesionální péče a podpora pacientů'
  },
  {
    name: 'MUDr. Samer Al Marei',
    role: 'Oftalmolog',
    badge: 'Lékař',
    description: 'Odborník v oftalmologii'
  }
]
</script>

<template>
  <section id="our-team" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6">
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Náš tým
        </span>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
        Odborný tým
      </h2>
      
      <p class="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
        Profesionální péče o váš zrak s lidským přístupem
      </p>
    </div>

    <!-- Team Grid -->
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-1rem)] [&>*:last-child:nth-child(odd)]:md:mx-auto">
      <div 
        v-for="member in team" 
        :key="member.name" 
        class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <!-- Badge -->
        <div class="flex justify-center pt-8 pb-4">
          <span class="inline-flex items-center gap-2 bg-[#60AA06] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wide">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
            {{ member.badge }}
          </span>
        </div>

        <!-- Profile Image Placeholder -->
        <div class="flex justify-center mb-6">
          <div class="relative group">
            <!-- Outer glow effect -->
            <div class="absolute inset-0 bg-[#60AA06]/20 rounded-full blur-xl"></div>
            
            <div class="relative w-32 h-32 bg-gradient-to-br from-[#60AA06]/20 to-[#60AA06]/10 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <svg class="w-20 h-20 text-[#60AA06]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Name & Role -->
        <div class="text-center px-8 pb-8">
          <h3 class="text-2xl font-black text-gray-900 mb-2 tracking-tight">
            {{ member.name }}
          </h3>
          
          <p class="text-lg text-[#60AA06] font-bold mb-4">
            {{ member.role }}
          </p>

          <p class="text-sm text-gray-600 font-medium leading-relaxed">
            {{ member.description }}
          </p>
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
