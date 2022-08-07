<script setup lang="ts">
import { ref } from "vue";
import DesktopView from "./components/DesktopView.vue";
import MobileView from "./components/MobileView.vue";

const isMobile = ref(false);

const getWidth = () => {
  window.innerWidth >= 768
    ? (isMobile.value = false)
    : (isMobile.value = true);
};

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", documentHeight);
window.onresize = function () {
  getWidth();
};

documentHeight();
getWidth();
</script>

<template>
  <mobile-view v-if="isMobile" />
  <desktop-view v-else />
</template>

<style lang="stylus" scoped></style>
