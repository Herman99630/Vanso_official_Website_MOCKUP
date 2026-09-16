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

    <section class="ecosystem section">
      <div class="container">
        <div class="section-heading platform-path-heading">
          <span class="eyebrow">ONE CONNECTED MUSIC JOURNEY</span>
          <h2>Two Ways To Add Music. One Place To Track It.</h2>
          <p>Create new AI music in the mobile app or upload an existing finished track from the web. Both paths connect to Creator Studio insights.</p>
        </div>
        <div class="platform-path" aria-label="Vanso mobile creation and web upload paths connecting to Creator Studio">
          <article class="path-card path-app">
            <small>MOBILE APP</small>
            <h3>Create New AI Music</h3>
            <p>Turn an idea into an original song, edit supported details and choose when to publish.</p>
            <ul><li>AI music creation</li><li>Mobile editing</li><li>Publish to Vanso</li></ul>
          </article>
          <article class="path-card path-web">
            <small>WEB UPLOAD</small>
            <h3>Add A Finished Track</h3>
            <p>Upload existing music as a separate option without using the mobile creation flow.</p>
            <ul><li>Audio and cover art</li><li>Description and lyrics</li><li>Publish as a Drop</li></ul>
          </article>
          <div class="path-connector" aria-hidden="true"><span></span><b>+</b><span></span><i>→</i></div>
          <article class="path-card path-studio">
            <small>CREATOR STUDIO</small>
            <h3>Track All Your Music</h3>
            <p>View available performance data across music created in the app and tracks uploaded from the web.</p>
            <div class="insight-tags"><span>Plays</span><span>Likes & Saves</span><span>Followers</span><span>Profile Views</span></div>
          </article>
        </div>
      </div>
    </section>

    <section class="section container web-upload-showcase">
      <div class="section-heading studio-showcase-heading">
        <span class="eyebrow">AN OPTIONAL WEB WORKFLOW</span>
        <h2>Upload Existing Music From The Web.</h2>
        <p>Web upload is a separate way to add a finished track to Vanso. It is not required for music created and published in the mobile app.</p>
      </div>
      <div class="studio-showcase-grid">
        <figure class="studio-shot studio-shot-upload">
          <img src="/assets/app-screens/creator-upload.webp" alt="Vanso Creator Studio New Drop page for uploading music, artwork, descriptions and lyrics on the web" />
          <figcaption><span>WEB</span><div><h3>Upload A Finished Track</h3><p>Add the audio, choose its language, upload cover art and include the story and lyrics behind your music.</p></div></figcaption>
        </figure>
      </div>
    </section>

    <section class="section container studio-showcase">
      <div class="section-heading studio-showcase-heading">
        <span class="eyebrow">CREATOR STUDIO INSIGHTS</span>
        <h2>See How All Your Music Connects.</h2>
        <p>Whether your music was created in the mobile app or uploaded from the web, Creator Studio helps you review published tracks and understand listener response.</p>
      </div>
      <div class="studio-showcase-grid">
        <figure class="studio-shot studio-shot-dashboard">
          <img src="/assets/app-screens/creator-dashboard.webp" alt="Vanso Creator Studio dashboard showing total plays, likes, saves and a recent published track" />
          <figcaption><span>OVERVIEW</span><div><h3>Your Music At A Glance</h3><p>Review total plays, likes, saves and recent Drops from one clear dashboard.</p></div></figcaption>
        </figure>
        <figure class="studio-shot studio-shot-statistics">
          <img src="/assets/app-screens/creator-statistics.webp" alt="Vanso Creator Studio statistics showing plays, interactions, followers and profile views" />
          <figcaption><span>INSIGHTS</span><div><h3>Follow Audience Response</h3><p>Explore plays, interactions, new followers and profile views as your audience grows.</p></div></figcaption>
        </figure>
      </div>
    </section>

    <section id="help" class="section container faq"><div class="section-heading"><h2>Vanso App FAQs</h2></div><details open><summary>Where Can I Download The Official Vanso App?</summary><p>Use the official Google Play and Apple App Store links on this page.</p></details><details><summary>Is Vanso Available On iOS And Android?</summary><p>Yes. Vanso is available for iPhone and Android devices.</p></details><details><summary>What Can I Do With The Vanso Mobile App?</summary><p>Create original AI music, choose whether to publish it, and edit supported details such as the cover and description.</p></details><details><summary>Can I Use Vanso On The Web?</summary><p>Yes. You can upload existing finished music through Creator Studio and view available performance data for both app-created and web-uploaded tracks.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE • PUBLISH • CONNECT</span><h2>Ready To Create With Vanso?</h2><p>Start with an idea. Turn it into music. See where your song can go.</p><div><a class="button" :href="googleUrl">Get it on Google Play</a><a class="button ghost" :href="appleUrl">Download on the App Store</a></div></section>
    <SiteFooter />
  </main>
</template>
