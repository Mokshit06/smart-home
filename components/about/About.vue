<template>
  <Wrapper :dark="true">
    <Body>
      <div class="about-img"></div>
      <div class="about-info">
        <h1 class="head">Make your home just like yourself</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
          reprehenderit magni, blanditiis voluptatum maxime provident
          praesentium alias ex, impedit dolore eaque maiores labore illo,
          exercitationem eum voluptate? Temporibus rerum laboriosam culpa
          repudiandae officia atque beatae aperiam, deleniti error soluta?
        </p>
      </div>
    </Body>
  </Wrapper>
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
.about-info {
  width: 40%;
}

.about-img {
  background-image: url("/home.jpg");
  background-position: center;
  background-size: contain;
  padding-top: 38%;
  width: 40%;
  background-repeat: no-repeat;
}
</style>