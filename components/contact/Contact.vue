<template>
  <div class="wrapper">
    <div class="copyright">
      <h3>home bit &copy; 2020</h3>
    </div>
    <div>
      <div>
        <h3 :style="{ 'margin-bottom': '5px' }">Explore</h3>
        <div class="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Technologies</a>
          <a href="">Products</a>
        </div>
      </div>
    </div>
    <h3 class="made-by">Made with ❤ by Mokshit Jain</h3>
  </div>
</template>

<script>
import { Wrapper, Body } from "../shared";

export default {
  components: {
    Wrapper,
    Body,
  },
};
</script>

<style scoped>
.wrapper {
  align-content: center;
  height: 35vh;
  display: grid;
  width: 70%;
  margin: 0 auto;
  color: #f8f8f8;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 1rem;
}

.links {
  display: flex;
  flex-direction: column;
}

.links a {
  text-decoration: none;
  color: #8d8d8d;
}

.made-by {
  grid-column: 1 / 3;
  font-weight: 500;
  font-size: 1.2rem;
}

.wrapper > div,
.made-by {
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright {
  border-right: 1px solid #a5a5a5;
}
</style>