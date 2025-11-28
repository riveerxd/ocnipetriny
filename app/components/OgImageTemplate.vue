<script setup lang="ts">
defineProps<{
  subtitle?: string
}>()
</script>

<template>
  <div
    style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);"
  >
    <!-- Background decorative elements -->
    <div style="position: absolute; top: -100px; left: 50px; width: 380px; height: 380px; background: radial-gradient(circle, rgba(96, 170, 6, 0.28) 0%, rgba(96, 170, 6, 0) 70%);" />
    <div style="position: absolute; top: 50px; right: -100px; width: 320px; height: 320px; background: radial-gradient(circle, rgba(96, 170, 6, 0.32) 0%, rgba(96, 170, 6, 0) 70%);" />
    <div style="position: absolute; bottom: -50px; left: 200px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(96, 170, 6, 0.24) 0%, rgba(96, 170, 6, 0) 70%);" />
    <div style="position: absolute; bottom: 30px; right: 100px; width: 350px; height: 350px; background: radial-gradient(circle, rgba(96, 170, 6, 0.2) 0%, rgba(96, 170, 6, 0) 70%);" />

    <!-- Content -->
    <div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 80px;">
      <!-- Main title -->
      <div style="font-size: 72px; font-weight: 700; color: #1e293b; line-height: 1.1; margin-bottom: 24px;">
        Ocni <span style="color: #60AA06;">Petriny</span>
      </div>

      <!-- Location -->
      <div style="font-size: 32px; font-weight: 500; color: #475569; margin-bottom: 20px;">
        Ocni ordinace Praha 6
      </div>

      <!-- Subtitle -->
      <div style="font-size: 24px; font-weight: 400; color: #64748b; max-width: 700px; line-height: 1.4;">
        {{ subtitle || 'Moderni pece o vas zrak s lidskym pristupem' }}
      </div>
    </div>

    <!-- Bottom accent line -->
    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #60AA06 0%, #4D8A05 100%);" />
  </div>
</template>
