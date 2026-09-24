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
  ['phone', 'Beyond The Generator', 'Bring AI music creation and music discovery together in a mobile experience.'],
  ['headphones', 'A Wider Listening Ecosystem', 'Reach listeners through Vanso discovery and supported mobile music experiences.'],
  ['comment', 'Expression With A Response', 'Give listeners a way to play, like, save and comment on your published music.'],
]
</script>

<template>
  <main class="page home-page">
    <SiteHeader />
    <section class="hero home-hero section-glow"><div class="home-hero-copy">
      <span class="eyebrow">AI MUSIC, MADE AND SHARED</span>
      <h1>Turn Your AI Music<br />Into Global Hits.<br /><span>Reach 400M+<br class="desktop-break" /> Listeners.</span></h1>
      <div class="hero-actions"><RouterLink class="button" to="/download">Get the App</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div>
      <p>Create original tracks in the Vanso app, publish on Vanso, and get discovered by real listeners.</p></div><div class="home-sonic-art"><img src="/assets/sonic-sculpture-v1.webp" width="1254" height="1254" fetchpriority="high" alt="Abstract sculptural sound ribbon with iridescent glass and metallic folds" /></div>
    </section>

    <section class="ticker" aria-label="Song showcase layout preview"><p class="showcase-note container">Song showcase preview · Verified creator stories and audio coming next.</p><div class="ticker-track">
      <article v-for="(song, index) in [...songs, ...songs]" :key="index" class="song-card glass"><img src="/assets/album-art.png" alt="" /><span><strong>{{ song[0] }}</strong><small>AI Music · Preview</small></span></article>
    </div></section>

    <section class="section container workflow-section">
      <div class="section-heading"><h2>From Idea to <span class="gradient-text">Published Track</span></h2><p>A simple path from your first idea to music that’s ready to be discovered by listeners on Vanso.</p></div>
      <div class="steps"><article><b>01</b><i><ProductIcon name="music" /></i><h3>Generate With AI</h3><p>Start with an idea, lyric, mood or story in the Vanso app.</p></article><article><b>02</b><i><ProductIcon name="publish" /></i><h3>Publish On Vanso</h3><p>Release your finished track into the Vanso music library.</p></article><article><b>03</b><i><ProductIcon name="headphones" /></i><h3>Reach Listeners</h3><p>Reach listeners through Vanso discovery, with opportunities for plays and feedback.</p></article></div>
    </section>

    <section class="section container">
      <div class="section-heading"><h2>Built For The AI <span class="gradient-text">Music Era</span></h2><p>More than a finished audio file: a place for your music to be discovered and heard.</p></div>
      <div class="feature-grid"><article v-for="(item, index) in features" :key="item[1]" :class="`feature-card tone-${index % 3}`"><b><ProductIcon :name="item[0]" /></b><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p></article></div>
    </section>

    <section class="mission section">
      <img src="/assets/light2.png" alt="Spotlights illuminating a music creator" />
      <div><span class="eyebrow">EXPRESSION ABOVE ALL</span><h2>Make Your Music Heard</h2><p>Vanso is dedicated to democratizing music distribution. We believe in a future where every creator—whether using instruments or algorithms—has a stage.</p><p>We bridge the gap between creators and the massive potential of mobile ecosystem listeners, building native experiences that make music discovery feel effortless for hundreds of millions of users.</p><RouterLink class="text-link" to="/about">Discover our story →</RouterLink></div>
    </section>
    <section class="final-cta section"><span class="eyebrow">CREATE • PUBLISH • CONNECT</span><h2>Your Next Song Starts With An Idea</h2><p>Turn inspiration into original AI music with the Vanso App.</p><RouterLink class="button" to="/download">Download The App</RouterLink></section>
    <SiteFooter />
  </main>
</template>
