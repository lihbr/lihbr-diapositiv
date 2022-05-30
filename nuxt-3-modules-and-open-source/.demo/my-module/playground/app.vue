<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
const nuxt = useNuxtApp()
console.log(nuxt.$myModule)
</script>
