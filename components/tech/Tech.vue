<template>
  <div class="tech">
    <TechItem
      v-scroll-to="'#speech'"
      imagePath="tech/assistant-2.jpg"
      head="Speech Recognition"
      para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          nesciunt! Tenetur beatae illo aperiam, cupiditate ullam corrupti at
          quibusdam, consequatur ad esse expedita quae fugit, asperiores
          provident exercitationem doloribus dolorum."
    />
    <TechItem
      v-scroll-to="'#security'"
      imagePath="tech/security.jpg"
      head="Home Security"
      para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          nesciunt! Tenetur beatae illo aperiam, cupiditate ullam corrupti at
          quibusdam, consequatur ad esse expedita quae fugit, asperiores
          provident exercitationem doloribus dolorum."
    />
    <TechItem
      v-scroll-to="'#light'"
      imagePath="tech/light.jpg"
      head="Smart Lights"
      para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          nesciunt! Tenetur beatae illo aperiam, cupiditate ullam corrupti at
          quibusdam, consequatur ad esse expedita quae fugit, asperiores
          provident exercitationem doloribus dolorum."
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