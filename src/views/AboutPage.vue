<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AppPhone from '../components/AppPhone.vue'
import ProductIcon from '../components/ProductIcon.vue'
import '../about-visual.css'

</script>

<template>
  <main class="page about-page">
    <SiteHeader />
    <section class="about-hero section-glow"><div class="about-intro-heading"><span class="eyebrow">ABOUT VANSO</span><h1>What Is Vanso?</h1></div><p>Vanso is an AI music platform where you can create original songs, publish them and reach listeners — all in one place.</p></section>

    <section class="split-section container section"><div><span class="eyebrow pink">WHY WE EXIST</span><h2>Why Vanso Exists</h2><p>Music creation has traditionally required expensive equipment, professional production skills and complex software. Vanso uses generative AI to make music creation more accessible, helping anyone turn an idea, lyric, emotion or story into an original song.</p><p>By bringing AI music creation, publishing and discovery into one platform, Vanso allows more people to express themselves through music—without requiring a professional music background.</p></div><div class="inspiration-art" aria-label="Concept illustration of everyday inspiration becoming music">
      <div class="memory-scene"><div class="memory-sun"></div><div class="memory-hills"></div><span>THE WAY HOME / 7:42 PM</span></div>
      <div class="idea-note"><small>A MOMENT WORTH KEEPING</small><strong>“A song for the<br />drive back home.”</strong><span>Warm · Nostalgic · Yours</span></div>
      <div class="memory-record"><ProductIcon name="music" /><div><small>YOUR LIFE, YOUR SOUNDTRACK</small><strong>The Long Way Home</strong></div><div class="visual-wave" aria-hidden="true"><i v-for="n in 18" :key="n" :style="{height: (12 + (n * 13 % 35)) + 'px', animationDelay: n * .08 + 's'}"></i></div></div>
      <p class="art-caption">Everyday Moments.<br /><strong>Original Music.</strong></p>
    </div></section>

    <section class="section container"><div class="section-heading"><h2>What Can You Do With Vanso?</h2><p>Creation, publishing and discovery come together in one connected experience.</p></div><div class="three-grid"><article><b>01</b><h3>Create Original AI Music</h3><p>Turn words, lyrics, moods and ideas into original songs.</p></article><article><b>02</b><h3>Publish Your Tracks As Drops</h3><p>Move your finished song into Vanso’s connected publishing flow.</p></article><article><b>03</b><h3>Reach Listeners & Connect</h3><p>Bring your original AI music to a potential audience of 400M+ listeners and build real connections through plays, likes, saves and comments.</p></article></div></section>

    <section class="section container audience-section">
      <div class="section-heading"><span class="eyebrow">ONE SHARED MUSIC SPACE</span><h2>Who Is Vanso For?</h2><p class="audience-lead">Create, Listen, Or Both. You Belong Here.</p><p>Turn your ideas into songs, discover music from others, or enjoy both sides of Vanso.</p></div>
      <div class="audience-canvas">
        <article class="audience-side audience-create" tabindex="0"><span class="audience-icon"><ProductIcon name="music" /></span><small>WHEN YOU WANT TO CREATE</small><h3>Create Your Sound</h3><p>Give your ideas a melody. Make original AI music and share it with listeners.</p><div class="floating-note">“Make this feeling a song.”</div><div class="audience-tags"><span>Your Ideas</span><span>Your Stories</span></div></article>
        <div class="shared-song"><div class="connection-ring"></div><div class="shared-cover"><img src="/assets/album-art.png" alt="Concept album artwork connecting music creation and listening" /><ProductIcon name="headphones" /></div><span>ONE SONG. MANY CONNECTIONS.</span><div class="visual-wave" aria-hidden="true"><i v-for="n in 22" :key="n" :style="{height: (10 + (n * 11 % 30)) + 'px', animationDelay: n * .07 + 's'}"></i></div></div>
        <article class="audience-side audience-listen" tabindex="0"><span class="audience-icon"><ProductIcon name="headphones" /></span><small>WHEN YOU WANT TO DISCOVER</small><h3>Find Your Next Favorite</h3><p>Explore original music, find new voices and connect through listening.</p><div class="floating-note"><ProductIcon name="comment" />Listen. Save. Connect.</div><div class="audience-tags"><span>New Voices</span><span>Shared Feelings</span></div></article>
        <p class="audience-footer">You Don’t Have To Choose A Side.</p>
      </div>
    </section>

    <section class="section container creation-scenes">
      <div class="section-heading"><h2>How Does Vanso Turn Ideas Into Music?</h2><p>From your first thought to a song that others can discover.</p></div>
      <div class="scene-grid">
        <article><div class="scene-visual idea-scene"><ProductIcon name="comment" /><strong>A Little Nostalgia.<br />A New Beginning.</strong><div class="audience-tags"><span>A Feeling</span><span>A Story</span></div></div><span class="scene-number">01</span><h3>Start With An Idea</h3><p>Begin with your words, lyrics, mood or imagination.</p></article>
        <article><div class="scene-visual sound-scene"><ProductIcon name="music" /><div class="visual-wave" aria-hidden="true"><i v-for="n in 24" :key="n" :style="{height: (20 + (n * 17 % 70)) + 'px', animationDelay: n * .06 + 's'}"></i></div><span>YOUR IDEA, TAKING SHAPE</span></div><span class="scene-number">02</span><h3>Create Your Sound</h3><p>Vanso turns your idea into original AI music, without professional production skills.</p></article>
        <article><div class="scene-visual publish-scene"><div class="mini-song"><img src="/assets/album-art.png" alt="Illustrative song artwork" /><strong>Your Original Song</strong></div><div class="publish-listeners"><ProductIcon name="publish" /><ProductIcon name="headphones" /><ProductIcon name="comment" /></div><span>PUBLISH ON VANSO</span></div><span class="scene-number">03</span><h3>Let It Be Heard</h3><p>Choose whether to publish and give listeners a way to discover your music.</p></article>
      </div>
    </section>

    <section class="access-band section"><div class="container"><div class="section-heading"><span class="eyebrow">WEB • IOS • ANDROID</span><h2>Where Can You Access Vanso?</h2><p>Visit Vanso on the web at vanso.ai, or download the mobile app from Google Play and the Apple App Store.</p><RouterLink class="button" to="/download">View official download options</RouterLink></div></div></section>

    <section class="principles section"><div class="container principle-layout"><div><span class="eyebrow">WHAT WE BELIEVE</span><h2>Our Principles</h2><p>Technology should remove barriers without removing the creator’s voice.</p></div><div><details open><summary>Expression Above All</summary><p>AI should amplify genuine human ideas and emotion.</p></details><details><summary>Creation For Everyone</summary><p>Music creation should be intuitive, welcoming and accessible.</p></details><details><summary>Every Song Deserves A Listener</summary><p>Creation becomes meaningful when it can travel, connect and receive a response.</p></details></div></div></section>

    <section class="download-cta container section"><div><span class="eyebrow pink">MUSIC WITHOUT BARRIERS</span><h2>Create AI Music. Share It With The World.</h2><p>Generate original music in the Vanso app, publish it to the community and help it find listeners through intelligent discovery.</p><RouterLink class="button" to="/download">Download Vanso</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div><AppPhone compact /></section>
    <SiteFooter />
  </main>
</template>
