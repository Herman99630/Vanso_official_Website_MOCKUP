<script setup>
defineProps({ label: { type: String, default: 'YOUR MUSIC' }, compact: Boolean })
</script>

<template>
  <div :class="['phone', { compact }]">
    <div class="phone-speaker"></div>
    <div class="phone-screen">
      <span class="micro">{{ label }}</span>
      <div class="phone-art"><img src="/assets/album-art.png" alt="AI song cover preview" /></div>
      <strong>Midnight City</strong><small>Created with Vanso</small>
      <div class="wave"><i v-for="i in 15" :key="i" :style="{ height: `${12 + ((i * 7) % 28)}px` }"></i></div>
      <button>▶</button>
    </div>
  </div>
</template>
