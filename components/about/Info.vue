<template>
  <div class="about-info">
    <h1 class="head">Make your home just like yourself</h1>
    <SubHead>
      ...or maybe even smarter?
    </SubHead>
    <p>
      Home Bit is the best place for you to search for Smart Home products. Our
      devices and softwares are made with User Experience in mind. We use
      Artificial Intelligence to make the User Experience smoother and do some
      things which, well... seem magical. Our products vary from Virtual
      Assistants to smart speakers and from Smart lights to Home security
      devices. We have excellent customer support and a 30 day trial period. We
      can assure you that you wouldn't be left usurprised.
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