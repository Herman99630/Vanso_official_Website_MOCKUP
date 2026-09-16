<script setup>
defineProps({ name: String })
const paths = {
  music: 'M9 18V5l11-2v13 M9 8l11-2 M9 18c0 2-6 4-6 1s6-4 6-1 M20 16c0 2-6 4-6 1s6-4 6-1',
  publish: 'M12 16V3 M7 8l5-5 5 5 M4 14v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6',
  phone: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 M10 5h4 M11 19h2',
  headphones: 'M4 15v-3a8 8 0 0 1 16 0v3 M4 13H3v7h4v-7H4 M20 13h1v7h-4v-7h3',
  comment: 'M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1 M7 9h10 M7 13h6',
}
</script>
<template><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name] || paths.music" /></svg></template>
