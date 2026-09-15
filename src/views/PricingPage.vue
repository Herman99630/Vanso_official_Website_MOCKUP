<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const plans = [
  { name: 'Free', audience: 'Try Vanso at no cost', price: '0', credits: '200', songs: '5', usage: 'Personal use', cta: 'Start Free' },
  { name: 'Mini', audience: 'For casual AI music creators', price: '1.99', credits: '1,000', songs: '25', usage: 'Commercial use included', cta: 'Choose Mini' },
  { name: 'Starter', audience: 'For active creators making music regularly', price: '4.99', credits: '3,000', songs: '75', usage: 'Commercial use included', cta: 'Choose Starter', popular: true },
  { name: 'Pro', audience: 'For serious creators producing at scale', price: '9.99', credits: '6,000', songs: '150', usage: 'Commercial use included', cta: 'Choose Pro', coming: 'Coming soon: Priority access to featured exposure and traffic boost tools.' },
]
</script>

<template>
  <main class="page pricing-page">
    <SiteHeader />
    <section class="pricing-hero section-glow">
      <span class="eyebrow">VANSO AI MUSIC PLANS</span>
      <h1>Choose Your Vanso Plan</h1>
      <p>Compare plans for creating original AI music, publishing your songs and reaching listeners with Vanso.</p>
      <div class="credit-equation" aria-label="One standard song uses 40 credits">
        <span>1 Standard Song</span>
        <b>=</b>
        <strong>40 Credits</strong>
      </div>
    </section>

    <section class="pricing-content container section">
      <div class="plan-grid">
        <article v-for="plan in plans" :key="plan.name" :class="['plan-card', { popular: plan.popular }]">
          <span v-if="plan.popular" class="popular-label">✦ MOST POPULAR</span>
          <h2>{{ plan.name }}</h2><p class="plan-audience">{{ plan.audience }}</p>
          <div class="plan-price"><small>US$</small><strong>{{ plan.price }}</strong><span>/ month</span></div>
          <ul><li>{{ plan.credits }} credits per month</li><li>Create up to {{ plan.songs }} standard songs per month</li><li>{{ plan.usage }}</li></ul>
          <p v-if="plan.coming" class="coming-feature">{{ plan.coming }}</p>
          <span class="button plan-cta" aria-disabled="true">{{ plan.cta }}</span>
        </article>
      </div>
      <p class="pricing-disclaimer">Plans renew monthly. Cancel anytime. Access continues through the end of your current billing period. Prices are shown in USD.</p>
    </section>

    <section class="credit-band section"><div class="container"><span class="eyebrow">SIMPLE, TRANSPARENT CREDITS</span><h2>How Vanso credits work</h2><p>Each standard song uses 40 credits. Your monthly song generation allowance depends on the Vanso plan you choose.</p></div></section>

    <section class="section container pricing-faq"><div class="section-heading"><h2>Vanso Pricing FAQs</h2></div><details open><summary>Is Vanso free to use?</summary><p>Yes. The Free plan includes 200 credits per month, allowing you to create up to 5 standard songs for personal use.</p></details><details><summary>How many credits does one standard song use?</summary><p>Each standard song uses 40 credits.</p></details><details><summary>Which Vanso plans include commercial use?</summary><p>Commercial use is included with the Mini, Starter and Pro plans. Music created under these plans can be used in personal and commercial projects, subject to the Vanso Subscription Terms and Terms of Service.</p></details><details><summary>Can I cancel my Vanso subscription?</summary><p>Yes. Vanso plans renew monthly and can be cancelled at any time.</p></details><details><summary>What happens after I cancel?</summary><p>Your paid-plan access continues through the end of your current billing period.</p></details></section>

    <section class="final-cta section"><span class="eyebrow">CREATE WITH VANSO</span><h2>Start turning ideas into original music.</h2><p>Choose the plan that fits your creative needs and start creating with Vanso.</p><RouterLink class="button" to="/download">Get the Vanso App</RouterLink></section>
    <SiteFooter />
  </main>
</template>
