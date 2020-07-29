<template>
  <div>
    <Topbar />
    <div v-scroll-spy="{ offset: 10 }">
      <section>
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Technologies />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
