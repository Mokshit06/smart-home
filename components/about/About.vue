<template>
  <Wrapper id="about" :dark="true">
    <Body>
      <div class="about-body">
        <div class="about-img"></div>
        <Info />
      </div>
    </Body>
  </Wrapper>
</template>

<script>
import { Wrapper, Body } from "../shared/styled";
import Info from "./Info.vue";

export default {
  components: {
    Wrapper,
    Body,
    Info,
  },
};
</script>

<style scoped>
.about-img {
  background-image: url("/about/home.jpg");
  background-position: center;
  background-size: cover;
  padding-top: 30.2%;
  width: 38%;
  background-repeat: no-repeat;
}

.about-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 910px) {
  .about-body {
    flex-direction: column;
    width: 80%;
  }

  .about-img {
    width: 100%;
    padding-top: 58%;
    margin-bottom: 3rem;
  }
}

@media (max-width: 660px) {
  .about-body {
    width: 90%;
  }
}
</style>