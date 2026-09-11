<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AppPhone from '../components/AppPhone.vue'

const roleCards = [
  ['AI MUSIC CREATORS', 'Turn ideas into songs', 'Create original music from prompts, lyrics, moods and everyday moments.'],
  ['LISTENERS & EXPLORERS', 'Discover new voices', 'Hear original AI music shaped by creators from around the world.'],
]
</script>

<template>
  <main class="page about-page">
    <SiteHeader />
    <section class="about-hero section-glow"><span class="eyebrow">ABOUT VANSO</span><h1>What is Vanso?</h1><p>Vanso is an AI music creation app built to turn ideas into songs—and connect every song to publishing, discovery and real listeners.</p></section>

    <section class="split-section container section"><div><span class="eyebrow pink">WHY WE EXIST</span><h2>Why Vanso exists</h2><p>For too long, music creation has been separated from most people by expensive tools, specialist knowledge and complex workflows.</p><p>Vanso turns music creation into an intuitive mobile experience, so imagination—not technical barriers—becomes the starting point.</p></div><div class="visual-card"><span>From a first idea<br />to a living song.</span></div></section>

    <section class="section container"><div class="section-heading"><h2>What Vanso does</h2><p>Creation, publishing and discovery come together in one connected experience.</p></div><div class="three-grid"><article><b>01</b><h3>AI music creation</h3><p>Generate original songs from words, lyrics, moods and ideas.</p></article><article><b>02</b><h3>Publish and distribute</h3><p>Move into a built-in release flow once your song is ready.</p></article><article><b>03</b><h3>Discover and connect</h3><p>Reach listeners and receive plays, saves and community feedback.</p></article></div></section>

    <section class="community-band section"><div class="container"><span class="eyebrow">FROM CREATION TO REAL CONNECTION</span><h2>AI music made to be heard.</h2><p>Vanso connects original AI music with listeners through publishing, intelligent distribution and community interaction.</p><div class="mini-community"><article><small>CREATOR</small><strong>Dream into Sound</strong><span>12.4k plays　3.2k saves</span></article><article><small>CREATOR</small><strong>Publish & Release</strong><span>Live in the Vanso library</span></article><article><small>LISTENER</small><strong>Midnight Echoes</strong><span>“This feels like my life OST.”</span></article><article><small>LISTENER</small><strong>Built through feedback</strong><span>Plays, saves and reactions</span></article></div></div></section>

    <section class="section container"><div class="section-heading"><h2>Who Vanso is for</h2></div><div class="role-grid"><article v-for="role in roleCards" :key="role[1]"><small>{{ role[0] }}</small><h3>{{ role[1] }}</h3><p>{{ role[2] }}</p></article></div></section>

    <section class="section container"><div class="section-heading"><h2>How Vanso works</h2></div><div class="steps"><article><b>01</b><i>✦</i><h3>Generate with AI</h3><p>Open the app and turn a prompt, lyric or emotion into music.</p></article><article><b>02</b><i>↗</i><h3>Publish and distribute</h3><p>Move your finished song into Vanso’s connected release flow.</p></article><article><b>03</b><i>◎</i><h3>Reach and learn</h3><p>Find listeners and see how they respond to your work.</p></article></div></section>

    <section class="principles section"><div class="container principle-layout"><div><span class="eyebrow">WHAT WE BELIEVE</span><h2>Our principles</h2><p>Technology should remove barriers without removing the creator’s voice.</p></div><div><details open><summary>Expression Above All</summary><p>AI should amplify genuine human ideas and emotion.</p></details><details><summary>Creation for Everyone</summary><p>Music creation should be intuitive, welcoming and accessible.</p></details><details><summary>Every Song Deserves a Listener</summary><p>Creation becomes meaningful when it can travel, connect and receive a response.</p></details></div></div></section>

    <section class="download-cta container section"><div><span class="eyebrow pink">MUSIC WITHOUT BARRIERS</span><h2>Create AI music. Share it with the world.</h2><p>Generate original music in the Vanso app, publish it to the community and help it find listeners through intelligent discovery.</p><RouterLink class="button" to="/download">Download Vanso</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div><AppPhone compact /></section>
    <SiteFooter />
  </main>
</template>
