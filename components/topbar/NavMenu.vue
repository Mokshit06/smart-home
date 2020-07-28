<template>
  <div
    class="nav"
    :class="{
      scrolledDown: scrolledDown,
      scrolledOverBanner: scrolledOverBanner,
    }"
  >
    <div class="nav-links">
      <a v-scroll-to="'#home'">Home</a>
      <a v-scroll-to="'#about'">About</a>
      <a v-scroll-to="'#technologies'">Technologies</a>
      <a v-scroll-to="'#features'">Features</a>
      <a v-scroll-to="'#contact'">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrolledDown: Boolean,
    scrolledOverBanner: Boolean,
  },
};
</script>

<style scoped>
.nav {
  transition: background 400ms;
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: center;
  min-height: 7vh;
  z-index: 10;
}

.nav-links {
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-around;
}

.nav-links a {
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.04rem;
  color: #f8f8f8;
  letter-spacing: 0.5px;
}

.scrolledDown {
  background: #0e0e0e;
}

.scrolledOverBanner {
  background: #060607;
}
</style>