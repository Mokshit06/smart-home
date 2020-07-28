<template>
  <div
    class="nav"
    :class="{
      scrolledDown: scrolledDown,
      scrolledOverBanner: scrolledOverBanner,
    }"
  >
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Technologies</a>
      <a href="#">Products</a>
      <a href="#">Home</a>
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
  width: 32%;
  align-items: center;
  justify-content: space-around;
}

.nav-links a {
  font-weight: 400;
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