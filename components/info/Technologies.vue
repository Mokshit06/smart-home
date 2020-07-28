<template>
  <Wrapper id="technologies">
    <Heading>
      Latest Technologies
    </Heading>
    <Body>
      <Tech />
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