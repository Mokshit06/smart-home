<template>
  <div class="product-item" data-aos="fade-up">
    <div class="product-info">
      <div class="title">
        <h2 class="head">{{ head }}</h2>
        <SubHead>{{ subhead }}</SubHead>
      </div>
      <p>
        {{ body }}
      </p>
      <div class="message" v-if="message">"{{ message }}"</div>
    </div>
    <Card :imagePath="'/' + imagePath" class="product-img" />
  </div>
</template>

<script>
import { SubHead } from "../shared/styled";

export default {
  components: {
    SubHead,
  },
  props: {
    imagePath: String,
    head: String,
    subhead: String,
    body: String,
    message: String,
  },
};
</script>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.product-item:nth-child(even) {
  flex-direction: row-reverse;
}

.product-info {
  width: 50%;
}

.title {
  line-height: 1.3;
  justify-content: center;
  margin-bottom: 1rem;
}

.head {
  font-size: 1.6rem;
  font-weight: 600;
}

.product-info p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  font-size: 1.03rem;
  margin-bottom: 1.1rem;
  color: #d4d4d4;
}

.message {
  font-style: italic;
  background: #28282c;
  padding: 0.9rem 2.1rem;
  border-radius: 4px;
  width: fit-content;
  position: relative;
  margin-left: 5px;
}

.message::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -13px;
  border-width: 13px;
  border-style: solid;
  border-color: transparent #28282c transparent transparent;
}

.product-img {
  width: 43%;
  border-radius: 10px;
}

@media (max-width: 950px) {
  .head {
    font-size: 1.5rem;
  }

  .product-info p {
    font-size: 1.01rem;
  }

  .message {
    padding: 0.8rem 1.4rem;
    font-size: 0.9rem;
  }

  .message::after {
    border-width: 10px;
    margin-top: -10px;
  }
}

@media (max-width: 850px) {
  .product-item {
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .product-item:nth-child(even) {
    flex-direction: column;
  }

  .product-item:nth-child(even) .product-info {
    margin-top: 1.7rem;
  }

  .head {
    font-size: 1.58rem;
  }

  .product-info {
    width: 84%;
    margin-bottom: 1.7rem;
  }

  .product-img {
    width: 84%;
  }
}
</style>