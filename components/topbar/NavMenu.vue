<template>
  <div class="nav-links" v-scroll-spy-active>
    <a v-scroll-to="'#home'">Home</a>
    <a v-scroll-to="'#about'">About</a>
    <a v-scroll-to="'#technologies'">Technologies</a>
    <a v-scroll-to="'#features'">Features</a>
    <a v-scroll-to="'#contact'">Contact</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-links a {
  font-weight: 400;
  padding: 0 0.6rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.04rem;
  color: #f8f8f8;
  letter-spacing: 0.5px;
  transition: all 450ms;
}

.nav-links a.active {
  color: #9595ff;
  font-weight: 600;
}

@media (max-width: 800px) {
  .nav-links a {
    font-size: 1rem;
  }
}
</style>