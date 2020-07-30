<template>
  <div class="about-info">
    <h1 class="head">Make your home just like yourself</h1>
    <SubHead>
      ...or maybe even smarter?
    </SubHead>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, eligendi
      nobis similique quaerat libero quae accusantium, excepturi dolorum nulla
      nostrum nemo cupiditate consequuntur saepe consequatur cumque! Officiis in
      fugiat, molestiae cumque id sequi asperiores. Ipsum nisi quam velit
      repudiandae aspernatur excepturi labore, quidem officia illum libero quis
      exercitationem minus totam.Lorem ipsum dolor sit, amet consectetur
      adipisicing.
    </p>
  </div>
</template>

<script>
import { SubHead } from "../shared/styled";

export default {
  components: {
    SubHead,
  },
};
</script>

<style scoped>
.about-info {
  width: 52%;
}

.head {
  font-size: 1.65rem;
  font-weight: 600;
  color: #f8f8f8;
}

.about-info p {
  line-height: 1.6;
  font-size: 1.04rem;
  color: rgb(209, 209, 209);
  margin-top: 0.8rem;
}

@media (max-width: 1100px) {
  .about-info p {
    font-size: 0.96rem;
    margin-top: 0.4rem;
  }

  .head {
    font-size: 1.48rem;
  }
}

@media (max-width: 910px) {
  .about-info {
    width: 100%;
  }
}
</style>