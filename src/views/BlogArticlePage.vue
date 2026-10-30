<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { halloweenPost, readingMinutes } from '../blog/posts.js'
const route = useRoute()
const post = halloweenPost
const minutes = computed(() => readingMinutes(post))
const formatDate = date => new Date(date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
const formatted = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
let jsonLd
onMounted(() => {
  jsonLd = document.createElement('script')
  jsonLd.type = 'application/ld+json'
  jsonLd.textContent = JSON.stringify({ '@context':'https://schema.org', '@type':'BlogPosting', headline:post.title, description:post.description, datePublished:post.publishedAt, author:{'@type':'Person',name:post.author}, publisher:{'@type':'Organization',name:'Vanso'}, mainEntityOfPage:'https://vanso.ai/blog/'+post.slug, image:post.cover })
  document.head.appendChild(jsonLd)
})
onUnmounted(() => jsonLd?.remove())
</script>
<template>
  <main class="page blog-page">
    <SiteHeader />
    <article class="blog-article">
      <header class="blog-article-header container">
        <RouterLink to="/blog" class="blog-back">← All articles</RouterLink>
        <span class="eyebrow pink">MUSIC CARD · HALLOWEEN</span>
        <h1>{{post.title}}</h1>
        <p class="blog-deck">{{post.excerpt}}</p>
        <div class="blog-byline"><span>By {{post.author}}</span><span>·</span><time :datetime="post.publishedAt">{{formatDate(post.publishedAt)}}</time><span>·</span><span>{{minutes}} min read</span></div>
      </header>
      <figure class="blog-cover"><img :src="post.cover" :alt="post.coverAlt" fetchpriority="high" /><figcaption class="sr-only">{{post.title}}</figcaption></figure>
      <div class="blog-body">
        <template v-for="(section, index) in post.sections" :key="index">
          <p v-if="section.type==='p'" v-html="formatted(section.text)"></p>
          <h2 v-else-if="section.type==='h2'">{{section.text}}</h2>
          <h3 v-else-if="section.type==='h3'">{{section.text}}</h3>
          <figure v-else-if="section.type==='image'" class="blog-step-image"><img :src="section.src" :alt="section.alt" loading="lazy" decoding="async" /></figure>
        </template>
        <div class="blog-final-action"><RouterLink class="button" to="/download">Make Your Halloween Song Now</RouterLink></div>
      </div>
    </article>
    <SiteFooter />
  </main>
</template>