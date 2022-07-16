<script setup lang="ts">
import { ref, useSlots } from "vue";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import dayjs from "dayjs";

const showToast = () => {
  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
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
};
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="showToast()">Toast Test</button>
    <button type="button" @click="updateTime()">Update Time</button>
    <p>Vue + Toastify funcionando :D</p>
    <p>{{ now.format("YYYY-MM-DD HH:MM:ss") }}</p>
  </div>
  <p>
    <strong>Feito com café e insônia by:</strong>
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
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
