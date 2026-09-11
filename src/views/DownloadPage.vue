<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AppPhone from '../components/AppPhone.vue'

const googleUrl = 'https://play.google.com/store/apps/details?id=com.vanso.music'
const appleUrl = 'https://apps.apple.com/sg/app/vanso/id6760441874'
const googleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(googleUrl)}`
const appleQr = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(appleUrl)}`
const reviews = [
  ['VansoCreator', 'A simple way to turn an idea into a complete song.'],
  ['MusicDreamer', 'I love that my music can reach listeners after I create it.'],
  ['LifeOST', 'The whole create, publish and discovery flow feels connected.'],
  ['NewVoice', 'A fresh place to create and find original AI music.'],
]
</script>

<template>
  <main class="page download-page">
    <SiteHeader />
    <section class="download-hero container section-glow"><div><span class="eyebrow">THE VANSO AI MUSIC APP</span><h1>Create AI music<br />wherever<br />inspiration strikes.</h1><p>Turn prompts, lyrics and ideas into original songs, publish your music and reach listeners—all from your phone.</p><small>Available for iOS and Android. Creator Studio remains accessible on the web.</small></div><AppPhone label="CREATE • PUBLISH • CONNECT" /></section>

    <section class="section container"><div class="section-heading"><h2>Download the official Vanso AI music app</h2><p>Scan a code on desktop, or open the official store directly on your phone.</p></div><div class="store-grid"><article><h3>Google Play</h3><p>For Android devices</p><a :href="googleUrl"><img :src="googleQr" alt="QR code for Vanso on Google Play" /></a><a class="text-link" :href="googleUrl">Open Google Play →</a></article><article><h3>App Store</h3><p>For iPhone and iPad</p><a :href="appleUrl"><img :src="appleQr" alt="QR code for Vanso on the App Store" /></a><a class="text-link" :href="appleUrl">Open App Store →</a></article></div></section>

    <section class="ratings section"><div class="container"><div class="section-heading"><h2>Rated by the Vanso community</h2><p>Store ratings below are presentation placeholders until official figures are confirmed.</p></div><div class="rating-grid"><article><span>Apple App Store</span><strong>4.X</strong><small>★★★★★</small></article><article><span>Google Play</span><strong>4.X</strong><small>★★★★★</small></article></div><div class="review-viewport"><div class="review-track"><article v-for="(review, index) in [...reviews, ...reviews]" :key="index"><b>★★★★★</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div></div></section>

    <section class="section container"><div class="section-heading"><h2>Create, publish and get heard</h2><p>Vanso brings the essential parts of an AI music journey into one mobile experience.</p></div><div class="three-grid"><article><b>01</b><h3>Create with AI</h3><p>Turn prompts, lyrics, moods and ideas into original music.</p></article><article><b>02</b><h3>Publish your song</h3><p>Move your finished track into Vanso’s connected publishing flow.</p></article><article><b>03</b><h3>Reach listeners</h3><p>Get discovered and receive meaningful listener feedback.</p></article></div></section>

    <section class="ecosystem section"><div class="container"><div class="section-heading"><h2>Create on mobile. Manage on the web.</h2><p>Your mobile app and Creator Studio support different parts of the same music journey.</p></div><div class="three-grid"><article><small>MOBILE APP</small><h3>Create & publish</h3><p>Generate original AI music and begin the publishing flow from your phone.</p></article><article><small>CREATOR STUDIO</small><h3>Manage & analyze</h3><p>Review songs, update supported details and follow performance on the web.</p></article><article><small>VANSO ECOSYSTEM</small><h3>Reach listeners</h3><p>Connect published music with listeners through discovery and recommendations.</p></article></div></div></section>

    <section id="help" class="section container faq"><div class="section-heading"><h2>Vanso App FAQs</h2></div><details open><summary>What is the Vanso AI music app?</summary><p>Vanso is a mobile AI music creation experience that connects song generation with publishing, discovery and listener feedback.</p></details><details><summary>Can I create AI music with Vanso?</summary><p>Yes. Start with a prompt, lyric, mood or idea and use the Vanso app to create original music.</p></details><details><summary>Where can I download the official Vanso app?</summary><p>Use the official Google Play and Apple App Store links on this page.</p></details><details><summary>Is Vanso available on iOS and Android?</summary><p>Yes. Vanso is available on both major mobile platforms.</p></details><details><summary>Can I use Vanso on the web?</summary><p>The mobile app is the primary creation experience. Creator Studio supports music management on the web.</p></details><details><summary>How do my songs reach listeners?</summary><p>After publishing, Vanso can connect eligible music with listeners through its discovery and recommendation experience.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE • PUBLISH • CONNECT</span><h2>Ready to create with Vanso?</h2><p>Start with an idea. Turn it into music. See where your song can go.</p><div><a class="button" :href="googleUrl">Get it on Google Play</a><a class="button ghost" :href="appleUrl">Download on the App Store</a></div></section>
    <SiteFooter />
  </main>
</template>
