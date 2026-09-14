<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AppPhone from '../components/AppPhone.vue'

const roleCards = [
  ['AI MUSIC CREATORS', 'Turn ideas into songs', 'Create original AI music and publish it for listeners to discover.'],
  ['LISTENERS & EXPLORERS', 'Discover new voices', 'Hear original AI music shaped by creators from around the world.'],
]
</script>

<template>
  <main class="page about-page">
    <SiteHeader />
    <section class="about-hero section-glow"><span class="eyebrow">ABOUT VANSO</span><h1>What is Vanso?</h1><p>Vanso is an AI music platform where you can create original songs, publish them and reach listeners — all in one place.</p></section>

    <section class="split-section container section"><div><span class="eyebrow pink">WHY WE EXIST</span><h2>Why Vanso exists</h2><p>For too long, music creation has been separated from most people by expensive tools, specialist knowledge and complex workflows.</p><p>Vanso turns music creation into an intuitive mobile experience, so imagination—not technical barriers—becomes the starting point.</p></div><div class="visual-card"><span>From a first idea<br />to a living song.</span></div></section>

    <section class="section container"><div class="section-heading"><h2>What can you do with Vanso?</h2><p>Creation, publishing and discovery come together in one connected experience.</p></div><div class="three-grid"><article><b>01</b><h3>Create original AI music</h3><p>Turn words, lyrics, moods and ideas into original songs.</p></article><article><b>02</b><h3>Publish your tracks as Drops</h3><p>Move your finished song into Vanso’s connected publishing flow.</p></article><article><b>03</b><h3>Discover and connect</h3><p>Listen to music from other creators and see how listeners respond to your work.</p></article></div></section>

    <section class="community-band section"><div class="container"><span class="eyebrow">FROM CREATION TO REAL CONNECTION</span><h2>AI music made to be heard.</h2><p>Vanso connects original AI music with listeners through publishing, intelligent distribution and community interaction.</p><div class="mini-community"><article><small>CREATOR</small><strong>Dream into Sound</strong><span>12.4k plays　3.2k saves</span></article><article><small>CREATOR</small><strong>Publish & Release</strong><span>Live in the Vanso library</span></article><article><small>LISTENER</small><strong>Midnight Echoes</strong><span>“This feels like my life OST.”</span></article><article><small>LISTENER</small><strong>Built through feedback</strong><span>Plays, saves and reactions</span></article></div></div></section>

    <section class="section container"><div class="section-heading"><h2>Who is Vanso for?</h2><p>Vanso is for creators who want to turn ideas into original AI music and listeners who want to discover new music made with AI. You don’t need to be a musician to begin.</p></div><div class="role-grid"><article v-for="role in roleCards" :key="role[1]"><small>{{ role[0] }}</small><h3>{{ role[1] }}</h3><p>{{ role[2] }}</p></article></div></section>

    <section class="section container"><div class="section-heading"><h2>How does Vanso connect creation, publishing and listening?</h2><p>Vanso brings the full journey together: create a track, publish it and let it reach listeners — without switching between separate tools.</p></div><div class="steps"><article><b>01</b><i>✦</i><h3>Generate with AI</h3><p>Open the app and turn a prompt, lyric or emotion into music.</p></article><article><b>02</b><i>↗</i><h3>Publish your song</h3><p>Move your finished song into Vanso’s connected publishing flow.</p></article><article><b>03</b><i>◎</i><h3>Reach and learn</h3><p>Find listeners and see how they respond to your work.</p></article></div></section>

    <section class="access-band section"><div class="container"><div class="section-heading"><span class="eyebrow">WEB • IOS • ANDROID</span><h2>Where can you access Vanso?</h2><p>Visit Vanso on the web at vanso.ai, or download the mobile app from Google Play and the Apple App Store.</p><RouterLink class="button" to="/download">View official download options</RouterLink></div></div></section>

    <section class="principles section"><div class="container principle-layout"><div><span class="eyebrow">WHAT WE BELIEVE</span><h2>Our principles</h2><p>Technology should remove barriers without removing the creator’s voice.</p></div><div><details open><summary>Expression Above All</summary><p>AI should amplify genuine human ideas and emotion.</p></details><details><summary>Creation for Everyone</summary><p>Music creation should be intuitive, welcoming and accessible.</p></details><details><summary>Every Song Deserves a Listener</summary><p>Creation becomes meaningful when it can travel, connect and receive a response.</p></details></div></div></section>

    <section class="download-cta container section"><div><span class="eyebrow pink">MUSIC WITHOUT BARRIERS</span><h2>Create AI music. Share it with the world.</h2><p>Generate original music in the Vanso app, publish it to the community and help it find listeners through intelligent discovery.</p><RouterLink class="button" to="/download">Download Vanso</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div><AppPhone compact /></section>
    <SiteFooter />
  </main>
</template>
