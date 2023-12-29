import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./router";

createApp(App).use(routes).mount("#app");
