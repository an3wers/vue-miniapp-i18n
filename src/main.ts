import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router";
import i18next from "./i18n";
import I18NextVue from "i18next-vue";

createApp(App).use(router).use(I18NextVue, { i18next }).mount("#app");
