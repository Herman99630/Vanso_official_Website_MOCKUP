<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BlogArtwork from '../components/BlogArtwork.vue'
import BlogMeta from '../components/BlogMeta.vue'
import { blogPosts } from '../data/blogPosts'
import '../blog.css'
const featured = blogPosts.find(post => post.featured)
const posts = blogPosts
</script>

<template>
  <main class="page blog-page">
    <SiteHeader />
    <div class="container blog-content">
      <article v-if="featured" class="blog-featured">
        <RouterLink class="blog-featured-link" :to="`/blog/${featured.slug}`">
          <div class="blog-featured-visual"><BlogArtwork :post="featured" eager /><span class="blog-pin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 3 6 0-1 6 4 4v2H6v-2l4-4-1-6ZM12 15v6" /></svg>PINNED STORY</span></div>
          <div class="blog-featured-copy"><span class="blog-category">{{ featured.category }}</span><h1>{{ featured.title }}</h1><p>{{ featured.excerpt }}</p><BlogMeta :post="featured" /></div>
        </RouterLink>
      </article>
      <section class="blog-latest" aria-labelledby="latest-stories"><div class="blog-section-heading"><h2 id="latest-stories">All Posts</h2></div>
        <div class="blog-grid"><article v-for="post in posts" :key="post.slug" class="blog-card"><RouterLink :to="`/blog/${post.slug}`"><BlogArtwork :post="post" /><div class="blog-card-copy"><span class="blog-category">{{ post.category }}</span><h3>{{ post.title }}</h3><p>{{ post.excerpt }}</p><BlogMeta :post="post" /></div></RouterLink></article></div>
      </section>
    </div>
    <SiteFooter />
  </main>
</template>
