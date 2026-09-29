<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ProductIcon from '../components/ProductIcon.vue'
import '../home-art.css'

const songs = [
  ['Midnight City Remix', '8.1k', '1.9k'], ['Neon Nights', '6.8k', '1.3k'],
  ['Summer Vibes', '5.6k', '1.2k'], ['Cyberpunk Dreams', '3.2k', '800'],
]
const features = [
  ['phone', 'Make The Everyday Musical', 'A small win, an inside joke, a strong opinion, or your reaction to the day. Turn it into a song with AI.'],
  ['headphones', 'Find Your Next Favorite', 'Trust your ears. Discover a hidden gem, save it to your favorites, and be the one who heard it first.'],
  ['comment', 'Share A Little Connection', 'Like a song, save it for later, or leave a comment. Small responses can make music feel more personal.'],
]
</script>

<template>
  <main class="page home-page">
    <SiteHeader />
    <section class="hero home-hero section-glow"><div class="home-hero-copy">
      <span class="eyebrow">YOUR LIFE, YOUR MUSIC</span>
      <h1>Turn Your AI Music<br />Into Global Hits.<br /><span>Reach 400M+<br class="desktop-break" /> Listeners.</span></h1>
      <div class="hero-actions"><RouterLink class="button" to="/download">Get The App</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div>
      <p>Turn everyday ideas into songs with AI in the Vanso app. Share your music, discover new songs, and find moments that feel like yours.</p></div><div class="home-sonic-art"><img src="/assets/sonic-sculpture-v1.webp" width="1254" height="1254" fetchpriority="high" alt="Abstract sculptural sound ribbon with iridescent glass and metallic folds" /></div>
    </section>

    <section class="ticker" aria-label="Song showcase layout preview"><p class="showcase-note container">Everyday Stories, Made Into Music</p><div class="ticker-track">
      <article v-for="(song, index) in [...songs, ...songs]" :key="index" class="song-card glass"><img src="/assets/album-art.png" alt="" /><span><strong>{{ song[0] }}</strong><small>AI Music · Preview</small></span></article>
    </div></section>

    <section class="section container workflow-section">
      <div class="section-heading"><h2>From Everyday Ideas <span class="gradient-text">To Songs</span></h2><p>A thought, a feeling, a little story — start with something from your day and make it a song.</p></div>
      <div class="steps"><article><b>01</b><i><ProductIcon name="music" /></i><h3>Generate With AI</h3><p>Start with an idea, lyric, mood or story in the Vanso app.</p></article><article><b>02</b><i><ProductIcon name="publish" /></i><h3>Publish On Vanso</h3><p>Share your song on Vanso and let others hear your take on life.</p></article><article><b>03</b><i><ProductIcon name="headphones" /></i><h3>Connect Through Music</h3><p>Discover songs, save your favorites, and connect with the people behind the music through likes and comments.</p></article></div>
    </section>

    <section class="section container">
      <div class="section-heading"><h2>Music For <span class="gradient-text">Your Everyday</span></h2><p>Make a song from your day, find something you love, and connect through music.</p></div>
      <div class="feature-grid"><article v-for="(item, index) in features" :key="item[1]" :class="`feature-card tone-${index % 3}`"><b><ProductIcon :name="item[0]" /></b><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p></article></div>
    </section>

    <section class="mission section">
      <img src="/assets/light2.png" alt="Spotlights illuminating a music creator" />
      <div><span class="eyebrow">EXPRESSION ABOVE ALL</span><h2>Music the world.</h2><p>You do not need an extraordinary life to have a story worth hearing. Vanso helps you turn everyday moments, feelings, and opinions into songs with AI — and share a little of your world.</p><p>Share a little of your world, or listen to someone else’s. Through songs, we can discover new stories, familiar feelings, and each other.</p><RouterLink class="text-link" to="/about">Discover Our Story →</RouterLink></div>
    </section>
    <section class="final-cta section"><span class="eyebrow">CREATE • LISTEN • CONNECT</span><h2>Bring A Little Music Into Your Day</h2><p>Create a song, find a new favorite, or do a little of both. Get started with the Vanso app.</p><RouterLink class="button" to="/download">Download The App</RouterLink></section>
    <SiteFooter />
  </main>
</template>
