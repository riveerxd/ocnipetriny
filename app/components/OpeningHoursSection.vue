<script setup lang="ts">
// OpeningHoursSection - Modern design matching hero vibe

interface OpeningHours {
  day: string;
  hours: string;
}

const openingHours: OpeningHours[] = [
  { day: "Pondělí", hours: "8:00 – 11:30 | 12:30 – 17:00" },
  { day: "Úterý", hours: "8:00 – 11:30 | 12:30 – 16:00" },
  { day: "Středa", hours: "8:00 – 11:30 | 12:30 – 14:00" },
  { day: "Čtvrtek", hours: "8:00 – 11:30 | 12:30 – 14:00" },
  { day: "Pátek", hours: "8:00 – 12:00" },
  { day: "Sobota – Neděle", hours: "Zavřeno" },
];
</script>

<template>
  <section
    id="opening-clinic"
    class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
  >
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div
        class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#60AA06]/20 shadow-lg mb-6"
      >
        <div class="w-2 h-2 bg-[#60AA06] rounded-full animate-pulse"></div>
        <span class="text-sm font-bold text-gray-800 tracking-wider uppercase">
          Informace o ordinaci
        </span>
      </div>

      <h2
        class="text-5xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight"
      >
        Ordinační hodiny
      </h2>
    </div>

    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-2 gap-8 items-stretch">
      <!-- Left Column: Opening Hours -->
      <div
        class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
      >
        <div class="flex items-center gap-3 mb-6">
          <div class="p-3 bg-[#60AA06]/10 rounded-xl">
            <svg
              class="w-8 h-8 text-[#60AA06]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="text-3xl font-black text-gray-900">Otevírací doba</h3>
        </div>

        <div class="space-y-3 flex-1">
          <div
            v-for="schedule in openingHours"
            :key="schedule.day"
            class="flex items-center justify-between p-4 rounded-xl bg-white/70 border border-[#60AA06]/10 hover:border-[#60AA06]/30 hover:bg-white transition-all duration-200"
          >
            <span class="font-bold text-gray-900 text-base">
              {{ schedule.day }}
            </span>
            <span class="text-gray-700 font-semibold text-sm">
              {{ schedule.hours }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: Map -->
      <div
        class="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-[#60AA06]/20 shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
      >
        <div class="p-6 border-b border-[#60AA06]/10">
          <div class="flex items-center gap-3">
            <div class="p-3 bg-[#60AA06]/10 rounded-xl">
              <svg
                class="w-8 h-8 text-[#60AA06]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-3xl font-black text-gray-900">Kde nás najdete</h3>
              <p class="text-gray-700 font-semibold text-sm">Stamicova 21, 162 00 Praha 6</p>
            </div>
          </div>
        </div>

        <div class="relative flex-1 min-h-[400px] md:min-h-0">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=50.0894524,14.3578435+(O%C4%8Dn%C3%AD%20Pet%C5%99iny)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            class="rounded-b-3xl"
            ><a
              href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/"
              >popolazione comuni Italia mappa interattiva</a
            ></iframe
          >
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
