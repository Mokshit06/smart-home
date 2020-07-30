<template>
  <Wrapper id="technologies">
    <Heading data-aos="fade-down">
      Latest Technologies
    </Heading>
    <Body>
      <TechList />
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