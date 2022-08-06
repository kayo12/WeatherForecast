<script setup lang="ts">
import DesktopView from "./components/DesktopView.vue";
const isMobile = false;

const documentHeight = () => {
 const doc = document.documentElement
 doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', documentHeight)
documentHeight()

</script>

<template>
  <mobile-view v-if="isMobile" />
  <desktop-view v-else />
</template>

<style lang="stylus" scoped></style>
