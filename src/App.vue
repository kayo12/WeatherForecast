<script setup lang="ts">
import DesktopView from "./components/DesktopView.vue";
const isMobile = false;
</script>

<template>
  <mobile-view v-if="isMobile" />
  <desktop-view v-else />
</template>

<style lang="stylus" scoped></style>
