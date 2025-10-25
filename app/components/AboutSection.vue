<script setup lang="ts">
// AboutSection component - Translucent about section for NClinic
import { useSlideInAnimation } from '~/composables/useSlideInAnimation'

const { isVisible } = useSlideInAnimation()

const aboutText = `V N Clinic věříme, že krásný úsměv je odrazem celkové pohody. Náš specializovaný tým zkušených zubních lékařů a hygienistek je zde, aby vám poskytl osobní přístup, citlivou péči, která zlepší vaše zubní zdraví a zvýší vaši sebedůvěru.`

const additionalText = `Naši zubní lékaři využívají nejnovější techniky a technologie k poskytování bezbolestných zubních ošetření, díky nimž bude vaše cesta za zdravím ústní dutiny pohodová a bez úzkosti. Vaše spokojenost a pohodlí patří mezi naše hlavní priority.`
</script>

<template>
  <section class="w-full py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <!-- Translucent card with glassmorphism effect -->
      <div
        :class="[
          'glass-card rounded-3xl p-8 md:p-12 lg:p-16',
          'backdrop-blur-xl bg-white/40 border-2 border-white/50',
          'shadow-2xl',
          'transition-all duration-700 hover:scale-105 hover:-translate-y-1',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 uppercase tracking-tight">
          O nás
        </h2>

        <div class="space-y-6 text-gray-900">
          <p class="text-lg md:text-xl leading-relaxed font-medium">
            {{ aboutText }}
          </p>

          <p class="text-lg md:text-xl leading-relaxed font-medium">
            {{ additionalText }}
          </p>

          <p class="text-lg md:text-xl leading-relaxed font-black">
            Nabízíme celou škálu stomatologických služeb (od preventivní péče až po specializovaná ošetření) pro pacienty všech věkových kategorií.
          </p>
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
