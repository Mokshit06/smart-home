<template>
  <Wrapper id="about" :dark="true">
    <Body>
      <div class="about-img"></div>
      <div class="about-info">
        <h1 class="head">Make your home just like yourself</h1>
        <SubHead :style="{ 'margin-bottom': '0.8rem' }"
          >...or maybe even smarter?</SubHead
        >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          eligendi nobis similique quaerat libero quae accusantium, excepturi
          dolorum nulla nostrum nemo cupiditate consequuntur saepe consequatur
          cumque! Officiis in fugiat, molestiae cumque id sequi asperiores.
          Ipsum nisi quam velit repudiandae aspernatur excepturi labore, quidem
          officia illum libero quis exercitationem minus totam.
        </p>
      </div>
    </Body>
  </Wrapper>
</template>

<script>
import { Wrapper, Body, SubHead } from "../shared";

export default {
  components: {
    Wrapper,
    Body,
    SubHead,
  },
};
</script>

<style scoped>
.about-info {
  width: 47%;
}

.head {
  font-size: 1.7rem;
}

.about-img {
  background-image: url("/home.jpg");
  background-position: center;
  background-size: contain;
  padding-top: 35.5%;
  width: 40%;
  background-repeat: no-repeat;
}
</style>