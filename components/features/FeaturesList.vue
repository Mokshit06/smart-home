<template>
  <div class="products">
    <FeatureItem
      imagePath="features/assistant.jpg"
      head="Voice control your music"
      subhead="Speech Recognition"
      body="Echo Dot streams music from Amazon Prime Music, Saavn, Gaana, Hungama
        Music and TuneIn - just ask for your favorite artist or song, or request
        a specific genre or mood. Search for music by album, decade, or let
        Alexa pick the music for you. Or wake up to your favorite music by
        setting a musical alarm. With Amazon Prime Music, you can also create
        and manage your personal playlist."
      message="Hey Google! what song is this?"
    />
    <FeatureItem
      imagePath="features/security-cover.jpg"
      head="See your home from your phone"
      subhead="Home Security"
      body="You can't always be watching your video feed. Nest Cam looks for motion and listens for conspicuous sounds, and if Nest Cam thinks something's up, it'll send a phone alert or an email with an image.Each Nest camera comes with a 30-day free trial of Nest Aware. Subscriptions start at just 6 a month for all your Nest cameras, speakers, and displays, including the Nest Hello video doorbell."
    />
    <FeatureItem
      imagePath="features/light-cover.jpg"
      head="Ambiance Lighting for your house"
      subhead="Smart Lights"
      body="Philips Hue is your personal wireless lighting system that lets you easily control your light and create the right ambiance for every moment. These smart lights are controlled using Artificial Intelligence. These can detect the current ambiance of your room and adjust the light and brightness of it to bring a relaxing and comfortable experience to you."
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