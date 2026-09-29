<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <main class="page article-page">
    <SiteHeader />
    <article class="help-article container">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><RouterLink to="/help">Help Center</RouterLink><span>›</span><span>Getting Started</span></nav>
      <span class="eyebrow">GETTING STARTED</span>
      <h1>Getting Started With Vanso</h1>
      <p class="article-lead">Vanso brings AI music creation, sharing, and listening together. Start in the app to make a song or discover music from others. Creator Studio on the web supports finished-track uploads and available performance data for your published music.</p>
      <h2>1. Get The Vanso App</h2>
      <p>Download Vanso for iPhone or Android to create songs, discover music, or enjoy both.</p>
      <RouterLink class="text-link" to="/download">View Official Download Options →</RouterLink>
      <h2>2. Turn An Idea Into Music</h2>
      <p>Use the mobile app to develop an idea, lyric or emotion into an original AI-generated track.</p>
      <h2>3. Share Your Music On Vanso</h2>
      <p>Save your song as a draft, keep it private, or make it public on Vanso for others to discover and enjoy.</p>
      <h2>4. Upload Tracks And View Data On The Web</h2>
      <p>Open Creator Studio to upload finished tracks and view available performance data for published music created in the app or uploaded from the web.</p>
      <div class="article-actions"><RouterLink class="button ghost" to="/help">Back To Help Center</RouterLink><a class="button" href="https://vanso.ai/main/home">Open Creator Studio</a></div>
    </article>
    <SiteFooter />
  </main>
</template>
