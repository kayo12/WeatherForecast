<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import dayjs from "dayjs";

import { useI18n } from "vue-i18n";

const i18n = useI18n();

const showToast = () => {
  Toastify({
    text: i18n.t("toast.success"),
    duration: 3000,
    //destination: "#",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
const count = ref(0);
const now = ref(dayjs());

const updateTime = () => {
  now.value = dayjs();
  setTimeout(updateTime, 1000);
};

onBeforeMount(() => {
  updateTime();
});
</script>

<template>
  <div class="card">
    <p v-once>Initial count is {{ count }}</p>
    <button type="button" @click="count--">-</button>
    <span>count is {{ count }}</span>
    <button type="button" @click="count++">+</button>
  </div>
  <div class="card">
    <button type="button" @click="showToast">{{ $t("toast.make") }}</button>
  </div>
  <div class="card">
    <p>{{ $t("working") }}</p>
    <p>
      <strong>{{ now.format("YYYY-MM-DD HH:MM:ss") }}</strong>
    </p>
  </div>

  <div class="card">
    <p>
      <strong>{{ $t("greetings") }}</strong>
    </p>
    <p>
      <a href="https://github.com/kayo12" target="_blank">
        <small>Kayo Henrique</small>
      </a>
    </p>

    <p>
      <a href="https://github.com/Igor-Ponso" target="_blank">
        <small>Igor Ponso</small>
      </a>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
span
  margin 0 1rem

</style>
