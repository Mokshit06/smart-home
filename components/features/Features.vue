<template>
  <Wrapper id="features" :dark="true">
    <Heading data-aos="fade-down">Features</Heading>
    <Body>
      <FeaturesList />
    </Body>
  </Wrapper>
</template>

<script>
import { Body, Wrapper, Heading } from "../shared/styled";
export default {
  components: {
    Body,
    Heading,
    Wrapper,
  },
};
</script>

<style>
</style>