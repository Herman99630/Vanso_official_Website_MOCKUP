<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ProductIcon from '../components/ProductIcon.vue'
import '../download-balance.css'

const googleUrl = 'https://play.google.com/store/apps/details?id=com.vanso.music'
const appleUrl = 'https://apps.apple.com/sg/app/vanso/id6760441874'
const creatorStudioUrl = 'https://vanso.ai/main/home'
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
        <h1>Create AI Music Wherever Inspiration Finds You.</h1>
        <p>Turn your ideas into original songs with Vanso. Create, personalize and publish music from your phone, then reach listeners across Vanso’s growing music community.</p>
        <div class="download-hero-actions">
          <a class="button" :href="appleUrl">Download On The App Store</a>
          <a class="button ghost" :href="googleUrl">Get It On Google Play</a>
        </div>
        <small>Available for iPhone and Android devices.</small>
      </div>
      <div class="hero-device-composition" aria-label="Vanso mobile creation and publishing experience">
        <div class="product-device hero-product-device hero-device-back">
          <span class="device-speaker"></span>
          <img src="/assets/app-screens/create-simple.jpg" alt="Vanso mobile app AI music creation screen" />
        </div>
        <div class="product-device hero-product-device hero-device-front">
          <span class="device-speaker"></span>
          <img src="/assets/app-screens/song-result.jpg" alt="Vanso mobile app showing a finished AI-generated song ready to edit or publish" />
        </div>
      </div>
    </section>

    <section class="section container download-store-section">
      <div class="section-heading">
        <h2>Download The Official Vanso AI Music App</h2>
        <p>Scan a code on desktop, or open the official store directly on your phone.</p>
      </div>
      <div class="store-grid">
        <article>
          <h3>Google Play</h3>
          <p>For Android Devices</p>
          <a :href="googleUrl"><img :src="googleQr" alt="QR code for Vanso on Google Play" /></a>
          <a class="text-link" :href="googleUrl">Open Google Play →</a>
        </article>
        <article>
          <h3>App Store</h3>
          <p>For iPhone</p>
          <a :href="appleUrl"><img :src="appleQr" alt="QR code for Vanso on the App Store" /></a>
          <a class="text-link" :href="appleUrl">Open App Store →</a>
        </article>
      </div>
    </section>

    <section class="section container download-benefits">
      <div class="section-heading">
        <span class="eyebrow">WHY VANSO</span>
        <h2>Three Reasons To Create With Vanso</h2>
      </div>
      <div class="three-grid benefit-grid">
        <article><b>01</b><h3>Turn Ideas Into Original Music</h3><p>Describe an idea, a feeling or a story, and let Vanso transform it into an original AI-generated song.</p></article>
        <article><b>02</b><h3>Make Every Song Your Own</h3><p>Review your song, then personalize supported details such as its cover art and description before sharing it with listeners.</p></article>
        <article><b>03</b><h3>Publish And Reach Listeners</h3><p>Publish your music on Vanso and give it the opportunity to receive plays, likes and feedback from listeners.</p></article>
      </div>
    </section>

    <section class="section container product-flow-section">
      <div class="section-heading">
        <span class="eyebrow">A MOBILE-FIRST CREATIVE FLOW</span>
        <h2>From Idea To Song In Minutes</h2>
        <p>You do not need professional music production experience to start creating. Vanso brings AI music generation, personalization and publishing together in one mobile experience.</p>
      </div>
      <div class="three-grid download-steps has-product-screens">
        <article>
          <div class="flow-screen-stack">
            <img src="/assets/app-screens/create-simple.jpg" alt="Vanso Simple mode for creating AI music from an idea" />
            <img src="/assets/app-screens/create-custom.jpg" alt="Vanso Custom mode with additional music creation controls" />
          </div>
          <b>01</b><h3>Start With An Idea</h3><p>Describe the music, feeling or story you want to create.</p>
        </article>
        <article>
          <div class="flow-generating"><img src="/assets/app-screens/generating.jpg" alt="Vanso generating an original AI song" /></div>
          <b>02</b><h3>Generate Your Song</h3><p>Let Vanso turn your idea into an original AI-generated track.</p>
        </article>
        <article>
          <div class="flow-single-screen"><img src="/assets/app-screens/song-result.jpg" alt="A finished AI-generated song in the Vanso app" /></div>
          <b>03</b><h3>Make It Yours And Publish</h3><p>Update supported details such as the cover art and description, then publish when you are ready.</p>
        </article>
      </div>
    </section>

    <section class="heard-section section">
      <div class="container heard-layout">
        <div class="heard-copy">
          <span class="eyebrow">FROM CREATION TO CONNECTION</span>
          <h2>AI Music Made<br />To Be Heard</h2>
          <p>Publish your AI music on Vanso so listeners can discover, play, save and comment on your songs.</p>
        </div>
        <div class="listener-art" role="img" aria-label="Illustration of a published song connecting with plays, saves and comments">
          <div class="listener-ring" aria-hidden="true"></div>
          <svg class="listener-lines" viewBox="0 0 500 360" fill="none" aria-hidden="true"><path d="M250 180 Q320 80 390 55 M250 180 Q360 170 420 210 M250 180 Q180 290 120 300" stroke="currentColor" stroke-width="1.5" /></svg>
          <div class="listener-song"><div class="listener-cover"><ProductIcon name="music" /><div class="listener-wave" aria-hidden="true"><i v-for="n in 20" :key="n" :style="{height:(16+n*13%49)+'px'}"></i></div></div><small>PUBLISHED ON VANSO</small><strong>Your Original Song</strong></div>
          <div class="listener-feedback feedback-play"><ProductIcon name="headphones" /><span>Plays</span><div class="feedback-wave" aria-hidden="true"><i v-for="n in 9" :key="n" :style="{height:(6+n*7%20)+'px'}"></i></div></div>
          <div class="listener-feedback feedback-save"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4V3Z" /></svg><span>Saves</span></div>
          <div class="listener-feedback feedback-comment"><ProductIcon name="comment" /><span>Comments</span></div>
        </div>
      </div>
    </section>

    <section class="ratings section">
      <div class="container">
        <div class="section-heading"><h2>What Creators Are Saying</h2><p>Two-row review layout preview. Final quotes and usernames will be replaced with verified community feedback.</p></div>
        <div class="review-viewport review-row"><div class="review-track"><article v-for="(review, index) in [...reviewsTop, ...reviewsTop]" :key="`top-${index}`"><b>CREATOR REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div>
        <div class="review-viewport review-row"><div class="review-track reverse"><article v-for="(review, index) in [...reviewsBottom, ...reviewsBottom]" :key="`bottom-${index}`"><b>COMMUNITY REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div>
      </div>
    </section>

    <section class="section container mobile-studio-bridge">
      <div class="studio-info-strip">
        <svg class="studio-info-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="7" width="38" height="27" rx="4" /><path d="M24 34v7m-9 0h18M13 26v-6m8 6V15m8 11v-8m8 8V12" /></svg>
        <div><h2>Your Music, Connected On The Web</h2><p>View available performance data for your published music, whether created in the app or uploaded from the web. You can also upload finished tracks through Creator Studio.</p></div>
        <a class="button ghost" :href="creatorStudioUrl">Open Creator Studio <span aria-hidden="true"> →</span></a>
      </div>
    </section>

    <section id="help" class="section container faq">
      <div class="section-heading"><h2>Vanso App FAQs</h2></div>
      <details open><summary>Is Vanso Available On iOS And Android?</summary><p>Yes. Vanso is available through the Apple App Store and Google Play.</p></details>
      <details><summary>Can I Create AI Music On The Website?</summary><p>Vanso’s AI music creation experience is currently built for the mobile App. Creator Studio on the web supports uploading finished tracks and viewing available performance data.</p></details>
      <details><summary>Do I Need Music Production Experience?</summary><p>No. Vanso is designed to help people turn ideas, emotions and stories into original music without requiring professional production experience.</p></details>
      <details><summary>What Can I Do After Creating A Song?</summary><p>You can personalize supported details such as the song’s cover art and description, then publish it for listeners to discover and engage with.</p></details>
      <details><summary>Can I Use The Same Account On Mobile And Web?</summary><p>Yes. Sign in with the same Vanso account to access the available mobile and web features connected to your account.</p></details>
    </section>

    <section class="final-cta section">
      <span class="eyebrow">YOUR NEXT SONG STARTS WITH AN IDEA</span>
      <h2>Turn Your Next Idea Into Original AI Music</h2>
      <p>Download Vanso and start creating from your phone.</p>
      <div><a class="button" :href="googleUrl">Get It On Google Play</a><a class="button ghost" :href="appleUrl">Download On The App Store</a></div>
    </section>
    <SiteFooter />
  </main>
</template>
