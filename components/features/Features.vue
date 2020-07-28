<template>
  <Wrapper :dark="true">
    <Heading>Features</Heading>
    <Body>
      <FeaturesList />
    </Body>
  </Wrapper>
</template>

<script>
import { Body, Wrapper, Heading } from "../shared";
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