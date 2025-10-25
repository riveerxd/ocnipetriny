<script setup lang="ts">
// ContactSection component - Contact and information section with translucent design
import { ref } from 'vue'
import { useSlideInAnimation } from '~/composables/useSlideInAnimation'

const { isVisible } = useSlideInAnimation()

interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}

const contactInfo = ref<ContactInfo[]>([
  {
    icon: '📍',
    label: 'Adresa',
    value: 'Zárubova 498/31, 142 00 Praha 12'
  },
  {
    icon: '📞',
    label: 'Telefon',
    value: '+420 703 622 644',
    href: 'tel:+420703622644'
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'sestra@nclinic.cz',
    href: 'mailto:sestra@nclinic.cz'
  },
  {
    icon: '🏢',
    label: 'IČO',
    value: '17842735'
  }
])

const openingHours = ref({
  weekdays: 'Pondělí – Pátek',
  morning: '8:00 – 12:00',
  afternoon: '12:30 – 16:00'
})

const announcement = ref({
  title: 'Vážení pacienti',
  message: 'Již ordinujeme dle pracovní doby. Objednávejte se přes email nebo zavolejte. V případě, že se nedovoláte, vždy voláme zpět pacientovi. Přijímáme nové pacienty. Těšíme se na Vás.'
})
</script>

<template>
  <section class="w-full py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Kontakt
        </h2>
        <p class="text-xl md:text-2xl text-gray-700">
          Jsme zde pro vás
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Information Card -->
        <div
          :class="[
            'glass-card rounded-3xl p-8 md:p-10',
            'backdrop-blur-xl bg-white/40 border-2 border-white/50',
            'shadow-2xl',
            'transition-all duration-700 hover:scale-105 hover:-translate-y-1',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <h3 class="text-3xl font-black mb-8 text-gray-900 uppercase tracking-wide">
            Kontaktní údaje
          </h3>

          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start space-x-4 group"
            >
              <span class="text-3xl">{{ info.icon }}</span>
              <div class="flex-1">
                <p class="text-xs font-black text-gray-900 mb-1 uppercase tracking-wide">
                  {{ info.label }}
                </p>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-lg text-gray-900 font-bold hover:text-gray-700 transition-colors duration-300"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-lg text-gray-900 font-bold">
                  {{ info.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Opening Hours & Announcement Card -->
        <div class="space-y-8">
          <!-- Opening Hours -->
          <div
            :class="[
              'glass-card rounded-3xl p-8 md:p-10',
              'backdrop-blur-xl bg-white/40 border-2 border-white/50',
              'shadow-2xl',
              'transition-all duration-700 delay-100 hover:scale-105 hover:-translate-y-1',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            ]"
          >
            <h3 class="text-3xl font-black mb-6 text-gray-900 uppercase tracking-wide">
              Ordinační hodiny
            </h3>

            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <span class="text-2xl">🕐</span>
                <div>
                  <p class="text-lg font-black text-gray-900 uppercase tracking-wide">
                    {{ openingHours.weekdays }}
                  </p>
                  <p class="text-gray-900 font-bold">
                    {{ openingHours.morning }} | {{ openingHours.afternoon }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Announcement -->
          <div
            :class="[
              'glass-card rounded-3xl p-8 md:p-10',
              'backdrop-blur-xl bg-white/40 border-2 border-white/50',
              'shadow-2xl',
              'transition-all duration-700 delay-200 hover:scale-105 hover:-translate-y-1',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            ]"
          >
            <h3 class="text-2xl font-black mb-4 text-gray-900 uppercase tracking-wide">
              {{ announcement.title }}
            </h3>
            <p class="text-gray-900 font-medium leading-relaxed">
              {{ announcement.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.75) 100%
  );
}

@supports (backdrop-filter: blur(20px)) {
  .glass-card {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}
</style>
