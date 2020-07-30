<template>
  <div class="tech">
    <TechItem
      v-scroll-to="'#speech'"
      imagePath="tech/assistant-2.jpg"
      head="Speech Recognition"
      para="A virtual assistant is an independent contractor who provides administrative services to clients while operating outside of the client's office. A virtual assistant typically operates from a home office but can access the necessary planning documents, such as shared calendars, remotely."
    />
    <TechItem
      v-scroll-to="'#security'"
      imagePath="tech/security.jpg"
      head="Home Security"
      para="Surveillance cameras used in the home are IP cameras or closed circuit. IP cameras connect over the internet and stream to users' phones using a Wi-Fi connection through wireless links. These cameras stream live footage to users, allowing them to watch for suspicious activity."
    />
    <TechItem
      v-scroll-to="'#light'"
      imagePath="tech/light.jpg"
      head="Smart Lights"
      para="Smart lighting is a lighting technology designed for convenience. This includes high efficiency fixtures and automated controls that make adjustments based on conditions such as occupancy or daylight availability. It includes task lighting, accent lighting, and general lighting"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tech {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .tech {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 660px) {
  .tech {
    grid-template-columns: 1fr;
  }
}
</style>