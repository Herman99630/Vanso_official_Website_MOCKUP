<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="nav-shell glass">
      <RouterLink class="brand" to="/" aria-label="Vanso home">
        <img class="brand-mark" src="/assets/vanso-logo.png" alt="" />
        <img class="brand-word" src="/assets/vanso-text.svg" alt="Vanso" />
      </RouterLink>
      <button class="menu-button" aria-label="Toggle navigation" @click="open = !open">{{ open ? '×' : '☰' }}</button>
      <nav :class="['nav-links', { open }]" aria-label="Primary navigation">
        <RouterLink to="/about" @click="open = false">About</RouterLink>
        <RouterLink to="/pricing" @click="open = false">Pricing</RouterLink>
        <span class="nav-placeholder" title="Blog is planned for a later phase">Blog</span>
        <RouterLink to="/help" @click="open = false">Help</RouterLink>
      </nav>
      <div class="nav-actions">
        <span class="language">◎ EN⌄</span>
        <a class="sign-in" href="https://vanso.ai/main/home">Sign in</a>
        <RouterLink class="button small" to="/download">Get App</RouterLink>
      </div>
    </div>
  </header>
</template>
