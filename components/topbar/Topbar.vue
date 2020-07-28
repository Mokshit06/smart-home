<template>
  <div>
    <NavMenu
      :scrolledDown="scrolledDown"
      :scrolledOverBanner="scrolledOverBanner"
    />
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
      const bannerHeight = document.getElementById("header").clientHeight;
      //console.log("bannerHeight", bannerHeight);
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
</style>