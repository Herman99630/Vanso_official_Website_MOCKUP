<script setup>
import { formatDate } from '../data/blogPosts'
defineProps({ post: { type: Object, required: true } })
</script>
<template>
 <div class="blog-byline"><span>By {{ post.author }}</span><span aria-hidden="true">·</span><time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time><span aria-hidden="true">·</span><span>{{ post.readingMinutes }} min{{ post.readingMinutes === 1 ? '' : 's' }} Read</span></div>
</template>
