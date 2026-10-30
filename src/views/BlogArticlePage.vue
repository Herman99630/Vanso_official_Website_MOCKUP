<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogArtwork from '../components/BlogArtwork.vue'
import BlogMeta from '../components/BlogMeta.vue'
import { blogPosts } from '../data/blogPosts'
import '../blog.css'
const route = useRoute()
const post = computed(() => blogPosts.find(item => item.slug === route.params.slug))
const recommendations = computed(() => blogPosts.filter(item => item.slug !== route.params.slug).slice(0, 3))
</script>
<template>
 <main class="page blog-page"><SiteHeader />
  <article v-if="post" class="container blog-article">
   <RouterLink class="blog-back" to="/blog">← Back To Blog</RouterLink>
   <header><span class="blog-category">{{ post.category }}</span><h1>{{ post.title }}</h1><p class="blog-article-deck">{{ post.excerpt }}</p><BlogMeta :post="post" /></header>
   <BlogArtwork :post="post" eager />
   <div class="blog-article-body" v-html="post.content" />
   <div class="blog-song-cta">
    <RouterLink v-if="post.ctaHref" class="button" :to="post.ctaHref">{{ post.cta }}</RouterLink>
    <button v-else class="button" type="button" disabled>{{ post.cta }}</button>
   </div>
  </article>
  <section v-else class="container blog-not-found"><h1>Story Not Found</h1><p>This story is not available.</p><RouterLink class="button" to="/blog">Back To Blog</RouterLink></section>
  <section v-if="post && recommendations.length" class="container blog-recommendations" aria-labelledby="recommended-stories">
   <div class="blog-section-heading"><h2 id="recommended-stories">Keep Reading</h2></div>
   <div class="blog-grid"><article v-for="item in recommendations" :key="item.slug" class="blog-card"><RouterLink :to="`/blog/${item.slug}`"><BlogArtwork :post="item" /><div class="blog-card-copy"><span class="blog-category">{{ item.category }}</span><h3>{{ item.title }}</h3><BlogMeta :post="item" /><p>{{ item.excerpt }}</p></div></RouterLink></article></div>
  </section>
  <SiteFooter />
 </main>
</template>
