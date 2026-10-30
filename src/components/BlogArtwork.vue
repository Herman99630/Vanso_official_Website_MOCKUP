<script setup>
defineProps({ post: { type: Object, required: true }, eager: Boolean })
</script>

<template>
  <div :class="['blog-artwork', `blog-tone-${post.tone}`, post.art && `blog-art-${post.art}`]">
    <img v-if="post.image" :src="post.image" :alt="post.alt" :loading="eager ? 'eager' : 'lazy'" decoding="async" :width="post.imageWidth || 1672" :height="post.imageHeight || 941" />
    <div v-else class="blog-concept" aria-hidden="true">
      <template v-if="post.art === 'note'"><div class="blog-paper"><span>For You</span><svg viewBox="0 0 120 60"><path d="M8 30h8l7-17 10 34 10-42 10 48 10-36 8 13h40" /></svg><small>A Little Song.<br>A Lot To Say.</small></div><span class="blog-art-orbit" /></template>
      <template v-else-if="post.art === 'connection'"><span class="blog-art-orbit"/><span class="blog-art-orbit second"/><div class="blog-heart"><svg viewBox="0 0 64 64"><path d="M32 53 9 31C-4 17 14 0 27 14l5 5 5-5C50 0 68 17 55 31Z" /></svg></div><span class="blog-bubble one">That Feeling.</span><span class="blog-bubble two">On Repeat.</span></template>
      <template v-else><div class="blog-album"><span>Little<br>Things.</span><svg viewBox="0 0 120 40"><path d="M5 20h12l5-10 8 22 9-28 9 32 9-26 7 10h50" /></svg></div><span class="blog-record"/></template>
    </div>
  </div>
</template>
