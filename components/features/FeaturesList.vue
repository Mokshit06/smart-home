<template>
  <div class="products">
    <FeatureItem
      id="speech"
      imagePath="features/assistant.jpg"
      head="Voice control your music"
      subhead="Speech Recognition"
      body="Prisma assistant streams music from Amazon Prime Music, Spotify and many others - just ask for your favorite artist or song, or request
        a specific genre or let
        Prisma pick the music for you. Or wake up to your favorite music by
        setting a musical alarm. You can also configure it to work with our other smart home products."
      message="Hey Prisma! what song is this?"
    />
    <FeatureItem
      id="security"
      imagePath="features/security-cover.jpg"
      head="See your home from your phone"
      subhead="Home Security"
      body="You can't always be watching your video feed. Prisma Home looks for motion and listens for conspicuous sounds, and if it thinks something's up, it'll send a phone alert or an email with an image. Each Prisma Home comes with a 30-day free trial of our cloud services. It also works seamlessly with our Prisma Assistant and you can tell it to check for anything suspicious."
    />
    <FeatureItem
      id="light"
      imagePath="features/light-cover.jpg"
      head="Ambiance Lighting for your house"
      subhead="Smart Lights"
      body="Prisma Gradient is your personal wireless lighting system that lets you easily control your light and create the right ambiance for every moment. It can detect the current ambiance of your room and adjust the light and brightness of it to bring a relaxing and comfortable experience to you. So that you can just turn it on and leave the rest of work on to it."
      :style="{ 'margin-bottom': 0 }"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.products {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4vh;
}
</style>