<template>
  <div class="wrapper" id="contact">
    <div class="about">
      <h3 class="contact-head">About</h3>
      <p>Made with ❤ by Mokshit Jain</p>
      <p>Montfort School</p>
      <p class="copy">&copy; home bit 2020</p>
    </div>
    <!-- <div class="line"></div> -->
    <div class="explore">
      <div>
        <h3 class="contact-head">Explore</h3>
        <div class="links">
          <a v-scroll-to="'#home'">Home</a>
          <a v-scroll-to="'#about'">About</a>
          <a v-scroll-to="'#technologies'">Technologies</a>
          <a v-scroll-to="'#features'">Features</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  height: 35vh;
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: #ffffffa8;
  font-size: 0.97rem;
}

.links {
  display: flex;
  flex-direction: column;
  line-height: 1.7;
}

.links a {
  text-decoration: none;
  cursor: pointer;
}

.about,
.explore {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.contact-head {
  color: #f8f8f8;
  font-size: 1.36rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.about p {
  line-height: 1.7;
}

.copy {
  margin-top: 1rem;
}

/* .line {
  height: 50%;
  width: 1px;
  background: #fff;
} */
</style>