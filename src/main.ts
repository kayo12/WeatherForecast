import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import "./style.css";

import ptBR from "./locales/pt-br.json";


const pinia = createPinia();
const app = createApp(App);

app.use(VueAxios, axios);

app.use(createPinia);

type MessageSchema = typeof ptBR;

const i18n = createI18n<[MessageSchema], "pt-BR">({
  locale: "pt-br",
  fallbackLocale: "pt-br",
  messages: {
    "pt-br": ptBR,
  },
});

app.use(i18n);

app.use(pinia);
app.mount("#app");
