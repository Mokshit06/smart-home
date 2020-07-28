<template>
  <div class="item">
    <div
      class="item-img"
      :style="{ 'background-image': `url(/${imagePath})` }"
    ></div>
    <div class="info">
      <h2>{{ head }}</h2>
      <p>{{ para }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    head: String,
    para: String,
  },
};
</script>

<style scoped>
.item {
  border-radius: 10px;
  height: 100%;
  background: #1d1d1d;
  box-shadow: #00000033 0px 5px 30px -15px;
  padding: 0.6rem;
}

.item h2 {
  font-weight: 470;
  margin: 1vh 0;
  font-size: 1.4rem;
}

.item p {
  color: #a7a7a7;
  font-weight: 400;
  line-height: 1.6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.02rem;
}

.item-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;
  padding-top: 66.3%;
  border-radius: 5px;
}

.info {
  padding: 0.8rem;
}
</style>