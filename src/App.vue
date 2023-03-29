<template>
  <router-view />
</template>

<script setup>
  //
</script>

<style lang="stylus">
.text-shadow
  text-shadow 2px 5px 5px black
  text-outline 1px black

.text-shadow-white
  text-shadow 2px 5px 5px white
  text-outline 1px white

.margin-inside
  h2, h3, p
    margin-top .5em !important
    margin-bottom .5em !important
  li
    margin-left 2em
</style>
