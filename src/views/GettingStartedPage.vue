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
      <p class="article-lead">Vanso brings AI music creation, publishing and listening into one connected platform. Begin in the mobile app, then use Creator Studio on the web to manage supported details and follow your music.</p>
      <div class="article-status"><strong>Preview guide</strong><span>Detailed product steps will be added after the workflow is confirmed.</span></div>
      <h2>1. Get The Vanso App</h2>
      <p>Download the official Vanso app for iOS or Android to begin creating original AI music.</p>
      <RouterLink class="text-link" to="/download">View official download options →</RouterLink>
      <h2>2. Turn An Idea Into Music</h2>
      <p>Use the mobile app to develop an idea, lyric or emotion into an original AI-generated track.</p>
      <h2>3. Publish And Reach Listeners</h2>
      <p>When your song is ready, continue through Vanso’s connected publishing flow so listeners can discover and respond to it.</p>
      <h2>4. Manage Your Music On The Web</h2>
      <p>Open Creator Studio to upload finished tracks and view available performance data for published music created in the app or uploaded from the web.</p>
      <div class="article-actions"><RouterLink class="button ghost" to="/help">Back to Help Center</RouterLink><a class="button" href="https://vanso.ai/main/home">Open Creator Studio</a></div>
    </article>
    <SiteFooter />
  </main>
</template>
