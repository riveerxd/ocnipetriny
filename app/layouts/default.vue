<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Premium Background Design -->
    <div class="fixed inset-0 z-0">
      <!-- Base gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-green-100/60 to-green-200/70"></div>
      
      <!-- Subtle overlay to blend everything -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-green-100/30"></div>
      
      <!-- Very subtle grid pattern -->
      <div class="absolute inset-0 opacity-8">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(96, 170, 6, 0.4) 1px, transparent 0); background-size: 50px 50px;"></div>
      </div>
    </div>

    <!-- Content wrapper with backdrop blur -->
    <div class="relative z-10">
      <!-- Navbar component -->
      <Navbar />
      
      <!-- Main content area with slot for page content -->
      <main>
        <slot />
      </main>
      
      <!-- Footer component -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
/* Clean minimal design */
</style>