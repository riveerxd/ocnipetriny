<script setup lang="ts">
// Main page - Oční Petriny website
const clinicData = {
  name: 'Oční Petriny',
  slogan: 'Moderní péče o váš zrak s lidským přístupem',
  phone: '+420 734 554 553',
  email: 'sestra@ocnipetriny.cz'
}

// Define OG Image - use static for prerendering
defineOgImage({
  component: 'OgImageTemplate',
  props: {
    subtitle: 'Moderní péče o váš zrak s lidským přístupem'
  },
  // Explicitly disable title capture to prevent page content leaking
  title: '',
  description: ''
})
</script>

<template>
  <div>
    <HeroSection 
      :clinic-name="clinicData.name"
      :slogan="clinicData.slogan"
      :phone="clinicData.phone"
      :email="clinicData.email"
    />
    <OpeningHoursSection />
    <ContactInfoSection />
    <TeamSection />
    <ProceduresSection />
    <TechnologySection />
    <ServicesSection />
  </div>
</template> 