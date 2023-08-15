<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">
    <nuxt-layout>
      <nuxt-loading-indicator></nuxt-loading-indicator>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </Html>
</template>
