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
      <p>From idea to audience — create original tracks in the Vanso app,<br />publish on Vanso and let listeners discover it.</p></div><div class="home-music-art" role="img" aria-label="Concept illustration: an idea for the drive home becomes a song and reaches listeners">
        <div class="home-sound-orbit orbit-one" aria-hidden="true"></div><div class="home-sound-orbit orbit-two" aria-hidden="true"></div>
        <div class="home-inspiration-note"><span>IT STARTS WITH AN IDEA</span><strong>“A song for the<br />drive home.”</strong></div>
        <div class="home-record">
          <div class="home-cover-art">
            <svg viewBox="0 0 360 360" fill="none" aria-hidden="true"><defs><linearGradient id="home-sky" x1="180" y1="0" x2="180" y2="360" gradientUnits="userSpaceOnUse"><stop stop-color="#293653"/><stop offset=".55" stop-color="#b26f99"/><stop offset="1" stop-color="#f5b58f"/></linearGradient><linearGradient id="home-road" x1="180" y1="180" x2="180" y2="360" gradientUnits="userSpaceOnUse"><stop stop-color="#574266"/><stop offset="1" stop-color="#182536"/></linearGradient></defs><path fill="url(#home-sky)" d="M0 0h360v360H0z"/><circle cx="246" cy="116" r="47" fill="#ffd9ae"/><path d="M0 203 62 153 160 218 276 163 360 201v159H0Z" fill="#554968"/><path d="m0 247 86-63 100 56 106-18 68 32v106H0Z" fill="#29374d"/><path d="M169 219h12l103 141H64Z" fill="url(#home-road)"/><path d="m178 237 3 10m2 9 7 22m7 18 16 52" stroke="#f0cab0" stroke-width="3"/><path d="m168 221-86 139m100-139 85 139" stroke="#9facc8" stroke-opacity=".6"/><path d="M24 24h36M24 24v36m312-36h-36m36 0v36" stroke="white" stroke-opacity=".35"/></svg>
            <span>VANSO / ORIGINAL SOUND</span><strong>The Long<br />Way Home</strong>
          </div>
          <div class="home-record-caption"><span>FROM IMAGINATION TO MUSIC</span><div class="home-record-wave" aria-hidden="true"><i v-for="n in 34" :key="n" :style="{height: (7+n*11%27)+'px',animationDelay:n*.06+'s'}"></i></div></div>
        </div>
        <div class="home-listening-note"><ProductIcon name="headphones" /><span>Made To<br /><strong>Be Heard.</strong></span></div>
      </div>
    </section>

    <section class="ticker" aria-label="Song showcase layout preview"><p class="showcase-note container">Song showcase preview · Verified creator stories and audio coming next.</p><div class="ticker-track">
      <article v-for="(song, index) in [...songs, ...songs]" :key="index" class="song-card glass"><img src="/assets/album-art.png" alt="" /><span><strong>{{ song[0] }}</strong><small>AI Music · Preview</small></span></article>
    </div></section>

    <section class="section container workflow-section">
      <div class="section-heading"><h2>From Your Idea To <span class="gradient-text">Listeners</span></h2><p>Three connected steps from an idea to real listener feedback.</p></div>
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
