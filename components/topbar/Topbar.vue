<template>
  <div>
    <div
      class="nav"
      :class="{
        scrolledDown: scrolledDown,
        scrolledOverBanner: scrolledOverBanner,
      }"
    >
      <NavMenu />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledDown: false,
      scrolledOverBanner: false,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll(e) {
      const topbarHeight = 72;
      const bannerHeight = document.querySelector("#home").clientHeight;
      const screenHeight = process.client ? window.innerHeight : 0;
      if (window.scrollY > topbarHeight && !this.scrolledDown) {
        this.scrolledDown = true;
      }
      if (window.scrollY < bannerHeight && this.scrolledDown) {
        this.scrolledOverBanner = true;
      } else {
        this.scrolledOverBanner = false;
      }
      if (window.scrollY <= topbarHeight && this.scrolledDown) {
        this.scrolledDown = false;
        this.scrolledOverBanner = false;
      }
    },
  },
};
</script>

<style>
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

.scrolledDown {
  background: #0e0e0e;
}

.scrolledOverBanner {
  background: #060607;
}
</style>