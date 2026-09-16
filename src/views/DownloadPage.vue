<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const googleUrl = 'https://play.google.com/store/apps/details?id=com.vanso.music'
const appleUrl = 'https://apps.apple.com/sg/app/vanso/id6760441874'
const googleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(googleUrl)}`
const appleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(appleUrl)}`
const reviewsTop = [
  ['VansoCreator', 'A simple way to turn an idea into a complete song.'],
  ['MusicDreamer', 'I love that my music can reach listeners after I create it.'],
  ['LifeOST', 'The whole create, publish and discovery flow feels connected.'],
  ['NewVoice', 'A fresh place to create and find original AI music.'],
]
const reviewsBottom = [
  ['EverydayCreator', 'Turning a small idea into music feels surprisingly natural.'],
  ['SoundExplorer', 'I can create on mobile and see how listeners respond.'],
  ['FirstDrop', 'Publishing a song feels like the beginning, not the end.'],
  ['AIListener', 'I enjoy discovering music made by creators around the world.'],
]
</script>

<template>
  <main class="page download-page">
    <SiteHeader />
    <section class="download-hero container section-glow">
      <div>
        <span class="eyebrow">THE VANSO AI MUSIC APP</span>
        <h1>Create AI Music<br />Wherever<br />Inspiration Strikes.</h1>
        <p>Turn ideas, lyrics, moods and stories into original songs, publish your music and reach listeners—all from your phone.</p>
        <small>Available for iOS and Android. Creator Studio remains accessible on the web.</small>
      </div>
      <div class="product-device hero-product-device">
        <span class="device-speaker"></span>
        <img src="/assets/app-screens/song-result.jpg" alt="Vanso mobile app showing a finished AI-generated song ready to edit or publish" />
      </div>
    </section>

    <section class="section container"><div class="section-heading"><h2>Download The Official Vanso AI Music App</h2><p>Scan a code on desktop, or open the official store directly on your phone.</p></div><div class="store-grid"><article><h3>Google Play</h3><p>For Android devices</p><a :href="googleUrl"><img :src="googleQr" alt="QR code for Vanso on Google Play" /></a><a class="text-link" :href="googleUrl">Open Google Play →</a></article><article><h3>App Store</h3><p>For iPhone</p><a :href="appleUrl"><img :src="appleQr" alt="QR code for Vanso on the App Store" /></a><a class="text-link" :href="appleUrl">Open App Store →</a></article></div></section>

    <section class="ratings section"><div class="container"><div class="section-heading"><h2>What Creators Are Saying</h2><p>Two-row review layout preview. Final quotes and usernames will be replaced with verified community feedback.</p></div><div class="review-viewport review-row"><div class="review-track"><article v-for="(review, index) in [...reviewsTop, ...reviewsTop]" :key="`top-${index}`"><b>CREATOR REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div><div class="review-viewport review-row"><div class="review-track reverse"><article v-for="(review, index) in [...reviewsBottom, ...reviewsBottom]" :key="`bottom-${index}`"><b>COMMUNITY REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div></div></section>

    <section class="section container product-flow-section">
      <div class="section-heading"><h2>From An Idea To A Finished Song</h2><p>See how Vanso turns a simple idea into original AI music you can edit and publish.</p></div>
      <div class="three-grid download-steps has-product-screens">
        <article>
          <div class="flow-screen-stack">
            <img src="/assets/app-screens/create-simple.jpg" alt="Vanso Simple mode for creating AI music from an idea" />
            <img src="/assets/app-screens/create-custom.jpg" alt="Vanso Custom mode with additional music creation controls" />
          </div>
          <b>01</b><h3>Create Your Way</h3><p>Start quickly in Simple mode or shape more details in Custom mode.</p>
        </article>
        <article>
          <div class="flow-generating"><img src="/assets/app-screens/generating.jpg" alt="Vanso generating an original AI song" /></div>
          <b>02</b><h3>Let Vanso Create</h3><p>Vanso transforms your idea into an original song and notifies you when it is ready.</p>
        </article>
        <article>
          <div class="flow-single-screen"><img src="/assets/app-screens/song-result.jpg" alt="A finished AI-generated song in the Vanso app" /></div>
          <b>03</b><h3>Edit And Publish</h3><p>Review the finished track, update supported details and choose when to publish.</p>
        </article>
      </div>
    </section>

    <section class="ecosystem section"><div class="container"><div class="section-heading"><h2>Create And Edit On Mobile. Upload And Track On The Web.</h2><p>The Vanso app and Creator Studio support different parts of your music journey.</p></div><div class="three-grid ecosystem-grid"><article class="mobile-product-card"><div class="inline-product-screen"><img src="/assets/app-screens/song-details.jpg" alt="Vanso mobile song details screen for editing a generated track" /></div><small>MOBILE APP</small><h3>Create, Publish & Edit</h3><p>Generate original AI music, choose whether to publish it, and update supported details such as the cover and description from your phone.</p></article><article><small>CREATOR STUDIO</small><h3>Upload & View Data</h3><p>Upload existing music from the web and view available performance data for your published tracks.</p></article><article><small>VANSO LISTENING ECOSYSTEM</small><h3>Reach Listeners</h3><p>Help published music reach listeners and receive plays, likes, saves and comments through Vanso’s discovery experience.</p></article></div></div></section>

    <section class="section container studio-showcase">
      <div class="section-heading studio-showcase-heading">
        <span class="eyebrow">CREATOR STUDIO</span>
        <h2>See How Your Music Connects.</h2>
        <p>Use Creator Studio on the web to review published tracks and understand how listeners are responding to your music.</p>
      </div>
      <div class="studio-showcase-grid">
        <figure class="studio-shot studio-shot-upload">
          <img src="/assets/app-screens/creator-upload.png" alt="Vanso Creator Studio New Drop page for uploading music, artwork, descriptions and lyrics on the web" />
          <figcaption><span>01</span><div><h3>Upload From The Web</h3><p>Add an existing track, choose its language, upload cover art and include the story and lyrics behind your music.</p></div></figcaption>
        </figure>
        <figure class="studio-shot studio-shot-dashboard">
          <img src="/assets/app-screens/creator-dashboard.png" alt="Vanso Creator Studio dashboard showing total plays, likes, saves and a recent published track" />
          <figcaption><span>02</span><div><h3>Your Music At A Glance</h3><p>Review total plays, likes, saves and recent Drops from one clear dashboard.</p></div></figcaption>
        </figure>
        <figure class="studio-shot studio-shot-statistics">
          <img src="/assets/app-screens/creator-statistics.png" alt="Vanso Creator Studio statistics showing plays, interactions, followers and profile views" />
          <figcaption><span>03</span><div><h3>Follow Audience Response</h3><p>Explore plays, interactions, new followers and profile views as your audience grows.</p></div></figcaption>
        </figure>
      </div>
    </section>

    <section id="help" class="section container faq"><div class="section-heading"><h2>Vanso App FAQs</h2></div><details open><summary>Where Can I Download The Official Vanso App?</summary><p>Use the official Google Play and Apple App Store links on this page.</p></details><details><summary>Is Vanso Available On iOS And Android?</summary><p>Yes. Vanso is available for iPhone and Android devices.</p></details><details><summary>What Can I Do With The Vanso Mobile App?</summary><p>Create original AI music, choose whether to publish it, and edit supported details such as the cover and description.</p></details><details><summary>Can I Use Vanso On The Web?</summary><p>Yes. Creator Studio supports uploading existing music and viewing available performance data on the web.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE • PUBLISH • CONNECT</span><h2>Ready To Create With Vanso?</h2><p>Start with an idea. Turn it into music. See where your song can go.</p><div><a class="button" :href="googleUrl">Get it on Google Play</a><a class="button ghost" :href="appleUrl">Download on the App Store</a></div></section>
    <SiteFooter />
  </main>
</template>
