<template>
  <div class="wrapper" id="home">
    <div class="cover">
      <h1 class="heading">home bit</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background-image: url("/cover.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
}

.cover {
  display: grid;
  place-items: center;
  backdrop-filter: brightness(42%) saturate(110%) blur(7px);
  height: 100%;
}

.heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #f8f8f8;
}

@media (max-width: 650px) {
  .wrapper {
    height: 45vh;
  }
}
</style>