<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AppPhone from '../components/AppPhone.vue'

const googleUrl = 'https://play.google.com/store/apps/details?id=com.vanso.music'
const appleUrl = 'https://apps.apple.com/sg/app/vanso/id6760441874'
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
    <section class="download-hero container section-glow"><div><span class="eyebrow">THE VANSO AI MUSIC APP</span><h1>Create AI music<br />wherever<br />inspiration strikes.</h1><p>Turn ideas, lyrics, moods and stories into original songs, publish your music and reach listeners—all from your phone.</p><small>Available for iOS and Android. Creator Studio remains accessible on the web.</small></div><AppPhone label="CREATE • PUBLISH • CONNECT" /></section>

    <section class="section container"><div class="section-heading"><h2>Download the official Vanso AI music app</h2><p>Scan a code on desktop, or open the official store directly on your phone.</p></div><div class="store-grid"><article><h3>Google Play</h3><p>For Android devices</p><a :href="googleUrl"><img :src="googleQr" alt="QR code for Vanso on Google Play" /></a><a class="text-link" :href="googleUrl">Open Google Play →</a></article><article><h3>App Store</h3><p>For iPhone</p><a :href="appleUrl"><img :src="appleQr" alt="QR code for Vanso on the App Store" /></a><a class="text-link" :href="appleUrl">Open App Store →</a></article></div></section>

    <section class="ratings section"><div class="container"><div class="section-heading"><h2>What creators are saying</h2><p>Two-row review layout preview. Final quotes and usernames will be replaced with verified community feedback.</p></div><div class="review-viewport review-row"><div class="review-track"><article v-for="(review, index) in [...reviewsTop, ...reviewsTop]" :key="`top-${index}`"><b>CREATOR REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div><div class="review-viewport review-row"><div class="review-track reverse"><article v-for="(review, index) in [...reviewsBottom, ...reviewsBottom]" :key="`bottom-${index}`"><b>COMMUNITY REVIEW</b><p>“{{ review[1] }}”</p><small>{{ review[0] }}</small></article></div></div></div></section>

    <section class="section container"><div class="section-heading"><h2>Create, publish and get heard</h2><p>Vanso brings the essential parts of an AI music journey into one mobile experience.</p></div><div class="three-grid download-steps"><article><b>01</b><h3>Create with AI</h3><p>Turn your ideas, lyrics, moods and stories into original music.</p></article><article><b>02</b><h3>Publish your song</h3><p>Choose when to publish your finished song and make it available for discovery.</p></article><article><b>03</b><h3>Reach listeners</h3><p>Connect with listeners and receive feedback through plays, likes, saves and comments.</p></article></div></section>

    <section class="ecosystem section"><div class="container"><div class="section-heading"><h2>Create and edit on mobile. Upload and track on the web.</h2><p>The Vanso app and Creator Studio support different parts of your music journey.</p></div><div class="three-grid"><article><small>MOBILE APP</small><h3>Create, publish & edit</h3><p>Generate original AI music, choose whether to publish it, and update supported details such as the cover and description from your phone.</p></article><article><small>CREATOR STUDIO</small><h3>Upload & view data</h3><p>Upload existing music from the web and view available performance data for your published tracks.</p></article><article><small>VANSO LISTENING ECOSYSTEM</small><h3>Reach listeners</h3><p>Help published music reach listeners and receive plays, likes, saves and comments through Vanso’s discovery experience.</p></article></div></div></section>

    <section id="help" class="section container faq"><div class="section-heading"><h2>Vanso App FAQs</h2></div><details open><summary>Where can I download the official Vanso app?</summary><p>Use the official Google Play and Apple App Store links on this page.</p></details><details><summary>Is Vanso available on iOS and Android?</summary><p>Yes. Vanso is available for iPhone and Android devices.</p></details><details><summary>What can I do with the Vanso mobile app?</summary><p>Create original AI music, choose whether to publish it, and edit supported details such as the cover and description.</p></details><details><summary>Can I use Vanso on the web?</summary><p>Yes. Creator Studio supports uploading existing music and viewing available performance data on the web.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE • PUBLISH • CONNECT</span><h2>Ready to create with Vanso?</h2><p>Start with an idea. Turn it into music. See where your song can go.</p><div><a class="button" :href="googleUrl">Get it on Google Play</a><a class="button ghost" :href="appleUrl">Download on the App Store</a></div></section>
    <SiteFooter />
  </main>
</template>
