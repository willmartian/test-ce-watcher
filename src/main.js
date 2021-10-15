import { createApp } from "vue";
import ionic from "./ionic.js";
import router from "./router.js";
import App from "./App.vue";

createApp(App).use(router).use(ionic).mount("#app");
