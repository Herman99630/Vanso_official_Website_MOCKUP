<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { posts, readingMinutes } from '../blog/posts.js'
const formatDate = date => new Date(date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
</script>
<template>
  <main class="page blog-page">
    <SiteHeader />
    <section class="blog-index-hero container">
      <span class="eyebrow">VANSO JOURNAL</span>
      <h1>Ideas, stories, and <span class="gradient-text">music.</span></h1>
      <p>Fresh inspiration, product updates, and simple ways to make music your own.</p>
    </section>
    <section class="container blog-index-list" aria-label="Blog posts">
      <RouterLink v-for="post in posts" :key="post.slug" class="blog-index-card" :to="'/blog/' + post.slug">
        <div class="blog-index-art"><img :src="post.cover" :alt="post.coverAlt" loading="lazy" /></div>
        <div class="blog-index-copy"><span class="eyebrow pink">MUSIC CARD · HALLOWEEN</span><h2>{{post.title}}</h2><p>{{post.excerpt}}</p><div class="blog-byline"><span>By {{post.author}}</span><span>·</span><time :datetime="post.publishedAt">{{formatDate(post.publishedAt)}}</time><span>·</span><span>{{readingMinutes(post)}} min read</span></div><span class="blog-read-more">Read article →</span></div>
      </RouterLink>
    </section>
    <SiteFooter />
  </main>
</template>