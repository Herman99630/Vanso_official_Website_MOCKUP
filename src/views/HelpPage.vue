<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const categories = [
  ['✦', 'Getting Started', 'New to Vanso? Start here.'],
  ['♫', 'Creating Music', 'Create original AI tracks in the Vanso app.'],
  ['↗', 'Publishing Your Music', 'Publish your tracks on Vanso and make them available for listeners to discover.'],
  ['◎', 'Managing Your Music', 'Get help with song details and see how people listen to and interact with your music.'],
  ['◇', 'Rights & Safety', 'Learn about usage rights and content guidelines.'],
  ['♙', 'Account & Plans', 'Find help with account settings and plan details.'],
  ['?', 'Troubleshooting', 'Resolve common creation, playback and sign-in issues.'],
]
</script>

<template>
  <main class="page help-page">
    <SiteHeader />
    <section class="help-hero section-glow">
      <div class="help-hero-copy">
      <span class="eyebrow">VANSO HELP CENTER</span>
      <h1>How Can We Help?</h1>
      <p>Find help with creating, sharing, listening, and using your Vanso account.</p>
      <label class="help-search"><span>⌕</span><input type="search" placeholder="Search Help articles…" aria-label="Search Help articles" disabled /></label>
      </div>
      <aside class="help-quick-start" aria-label="Help shortcuts">
        <span class="eyebrow">FIND YOUR WAY</span>
        <RouterLink to="/help/getting-started-with-vanso">Getting Started <span aria-hidden="true">↗</span></RouterLink>
        <a href="#help-topics">Browse All Topics <span aria-hidden="true">↓</span></a>
      </aside>
    </section>

    <section id="help-topics" class="section container help-content">
      <div class="section-heading"><h2>Explore Vanso Help</h2><p>Choose a topic to understand each part of your Vanso experience.</p></div>
      <div class="help-grid">
        <article v-for="(category, index) in categories" :key="category[1]" :class="{ featured: index === 0 }">
          <b>{{ category[0] }}</b><h3>{{ category[1] }}</h3><p>{{ category[2] }}</p>
          <RouterLink v-if="index === 0" class="text-link" to="/help/getting-started-with-vanso">Read the guide →</RouterLink>
          <span v-else class="coming-soon">Articles coming soon</span>
        </article>
      </div>
    </section>

    <section class="help-note section"><div class="container"><span class="eyebrow">OFFICIAL GUIDANCE</span><h2>Make The Most Of Vanso</h2><p>Explore help for creating songs, discovering music, and using your account.</p></div></section>
    <SiteFooter />
  </main>
</template>
