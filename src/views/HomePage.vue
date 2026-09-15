<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const songs = [
  ['Midnight City Remix', '8.1k', '1.9k'], ['Neon Nights', '6.8k', '1.3k'],
  ['Summer Vibes', '5.6k', '1.2k'], ['Cyberpunk Dreams', '3.2k', '800'],
]
const features = [
  ['✦', 'Create', 'Turn ideas into original AI music in the Vanso app.'],
  ['↗', 'Publish & Distribute', 'Publish your tracks as Drops and share them with listeners on Vanso.'],
  ['◎', 'Discover & Listen', 'Browse and listen to original AI music from creators around the world.'],
]
</script>

<template>
  <main class="page home-page">
    <SiteHeader />
    <section class="hero home-hero section-glow">
      <span class="eyebrow">AI MUSIC, MADE AND SHARED</span>
      <h1>Turn Your AI Music<br />Into Global Hits.<br /><span>Reach 400M+<br class="desktop-break" /> Listeners.</span></h1>
      <div class="hero-actions"><RouterLink class="button" to="/download">Get the App</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div>
      <p>From idea to audience — create original tracks in the Vanso app,<br />publish your music and let listeners discover it.</p>
    </section>

    <section class="ticker" aria-label="Featured songs"><div class="ticker-track">
      <article v-for="(song, index) in [...songs, ...songs]" :key="index" class="song-card glass"><img src="/assets/album-art.png" alt="" /><span><strong>{{ song[0] }}</strong><small>◉ {{ song[1] }}　♡ {{ song[2] }}</small></span></article>
    </div></section>

    <section class="section container">
      <div class="section-heading"><h2>Built for the AI <span class="gradient-text">Music Era</span></h2><p>Create, publish and discover original AI music in one connected experience.</p></div>
      <div class="feature-grid"><article v-for="(item, index) in features" :key="item[1]" :class="`feature-card tone-${index % 3}`"><b>{{ item[0] }}</b><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p></article></div>
    </section>

    <section class="section container workflow-section">
      <div class="section-heading"><h2>From Creation to <span class="gradient-text">400M+ Listeners</span></h2><p>Three connected steps from an idea to real listener feedback.</p></div>
      <div class="steps"><article><b>01</b><i>✦</i><h3>Generate with AI</h3><p>Start with an idea, lyric, mood or story in the Vanso app.</p></article><article><b>02</b><i>↗</i><h3>Publish your song</h3><p>Release your finished track into the Vanso music library.</p></article><article><b>03</b><i>◎</i><h3>Reach listeners</h3><p>Get discovered through recommendations and receive feedback.</p></article></div>
    </section>

    <section class="mission section">
      <img src="/assets/light2.png" alt="Spotlights illuminating a music creator" />
      <div><span class="eyebrow">EXPRESSION ABOVE ALL</span><h2>Music the World</h2><p>Vanso is dedicated to democratizing music distribution. We believe in a future where every creator—whether using instruments or algorithms—has a stage.</p><RouterLink class="text-link" to="/about">Discover our story →</RouterLink></div>
    </section>
    <SiteFooter />
  </main>
</template>
