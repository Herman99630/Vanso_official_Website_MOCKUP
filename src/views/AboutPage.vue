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

    <section class="split-section container section"><div><span class="eyebrow pink">WHY WE EXIST</span><h2>Why Vanso exists</h2><p>Music creation has traditionally required expensive equipment, professional production skills and complex software. Vanso uses generative AI to make music creation more accessible, helping anyone turn an idea, lyric, emotion or story into an original song.</p><p>By bringing AI music creation, publishing and discovery into one platform, Vanso allows more people to express themselves through music—without requiring a professional music background.</p></div><div class="visual-card"><span>From a first idea<br />to an original AI song.</span></div></section>

    <section class="section container"><div class="section-heading"><h2>What can you do with Vanso?</h2><p>Creation, publishing and discovery come together in one connected experience.</p></div><div class="three-grid"><article><b>01</b><h3>Create original AI music</h3><p>Turn words, lyrics, moods and ideas into original songs.</p></article><article><b>02</b><h3>Publish your tracks as Drops</h3><p>Move your finished song into Vanso’s connected publishing flow.</p></article><article><b>03</b><h3>Reach listeners & connect</h3><p>Bring your original AI music to a potential audience of 400M+ listeners and build real connections through plays, likes, saves and comments.</p></article></div></section>

    <section class="community-band section"><div class="container"><span class="eyebrow">BEYOND GENERATION</span><h2>Your music journey doesn’t end when the song is created.</h2><p>Vanso connects AI music creation with publishing and discovery. Once you choose to publish your song, it can enter the Vanso listening experience—where people can play, like, save and comment on your work.</p><div class="mini-community journey-cards"><article><small>01</small><strong>Create Original Music</strong><span>Turn your idea into a song in the Vanso app.</span></article><article><small>02</small><strong>Publish Your Song</strong><span>Choose when to release your finished music.</span></article><article><small>03</small><strong>Reach Listeners</strong><span>Receive plays, likes, saves and comments.</span></article></div></div></section>

    <section class="section container"><div class="section-heading"><h2>Who is Vanso for?</h2><p>Vanso is for creators who want to turn ideas into original AI music and listeners who want to discover new music made with AI. You don’t need to be a musician to begin.</p></div><div class="role-grid"><article v-for="role in roleCards" :key="role[1]"><small>{{ role[0] }}</small><h3>{{ role[1] }}</h3><p>{{ role[2] }}</p></article></div></section>

    <section class="section container"><div class="section-heading"><h2>How does Vanso turn ideas into music?</h2><p>Vanso makes AI music creation simple and accessible, helping you move from a first idea to a finished song.</p></div><div class="steps"><article><b>01</b><i>✦</i><h3>Start with an idea</h3><p>Begin with your words, lyrics, mood, story or imagination.</p></article><article><b>02</b><i>♫</i><h3>Create original music with AI</h3><p>Vanso transforms your idea into an original song without requiring professional production skills.</p></article><article><b>03</b><i>↗</i><h3>Publish when you’re ready</h3><p>Choose whether to publish your song and make it available for listeners to discover.</p></article></div></section>

    <section class="access-band section"><div class="container"><div class="section-heading"><span class="eyebrow">WEB • IOS • ANDROID</span><h2>Where can you access Vanso?</h2><p>Visit Vanso on the web at vanso.ai, or download the mobile app from Google Play and the Apple App Store.</p><RouterLink class="button" to="/download">View official download options</RouterLink></div></div></section>

    <section class="principles section"><div class="container principle-layout"><div><span class="eyebrow">WHAT WE BELIEVE</span><h2>Our principles</h2><p>Technology should remove barriers without removing the creator’s voice.</p></div><div><details open><summary>Expression Above All</summary><p>AI should amplify genuine human ideas and emotion.</p></details><details><summary>Creation for Everyone</summary><p>Music creation should be intuitive, welcoming and accessible.</p></details><details><summary>Every Song Deserves a Listener</summary><p>Creation becomes meaningful when it can travel, connect and receive a response.</p></details></div></div></section>

    <section class="download-cta container section"><div><span class="eyebrow pink">MUSIC WITHOUT BARRIERS</span><h2>Create AI music. Share it with the world.</h2><p>Generate original music in the Vanso app, publish it to the community and help it find listeners through intelligent discovery.</p><RouterLink class="button" to="/download">Download Vanso</RouterLink><a class="button ghost" href="https://vanso.ai/main/home">Open Creator Studio</a></div><AppPhone compact /></section>
    <SiteFooter />
  </main>
</template>
