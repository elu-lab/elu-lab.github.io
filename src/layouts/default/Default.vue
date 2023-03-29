<template lang="pug">
v-app
  AppBar
  DefaultView
  v-footer.d-flex.flex-column.px-4.py-2.bg-indigo-lighten-3
    .text-right.w-100 {{ new Date().getFullYear() }} — <strong>ELU Lab</strong>, Chung-Ang University, Seoul, Korea.
</template>

<script setup>
  import AppBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
