<script setup lang="ts">
// Main page - Oční Petriny website
const clinicData = {
  name: 'Oční Petriny',
  slogan: 'Moderní péče o váš zrak s lidským přístupem',
  phone: '+420 233 018 277',
  email: 'sestra@ocnipetriny.cz'
}
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
    <ServicesSection />
  </div>
</template> 