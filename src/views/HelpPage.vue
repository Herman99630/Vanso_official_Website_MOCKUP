<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const categories = [
  ['✦', 'Getting Started', 'New to Vanso? Start here.'],
  ['♫', 'Creating Music', 'Create original AI tracks in the Vanso app.'],
  ['↗', 'Publishing & Distribution', 'Turn your tracks into Drops and share them.'],
  ['◎', 'Managing Your Music', 'Organize and track your published Drops.'],
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
      <p>Find answers about creating, publishing and managing your AI music on Vanso.</p>
      <label class="help-search"><span>⌕</span><input type="search" placeholder="Search Help articles…" aria-label="Search Help articles" disabled /></label>
      <small>Search will be enabled when Help Center content is connected.</small>
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

    <section class="help-note section"><div class="container"><span class="eyebrow">OFFICIAL GUIDANCE</span><h2>Clear Answers, Grounded In The Product.</h2><p>Vanso Help will grow with practical guidance for creators and listeners. New articles will be added only after each workflow and policy has been confirmed.</p></div></section>
    <SiteFooter />
  </main>
</template>
