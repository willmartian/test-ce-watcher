import { createRouter, createWebHistory } from "@ionic/vue-router";
import IonSplitPane from "./components/IonSplit.vue";

const routes = [
  {
    path: "/",
    component: IonSplitPane
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
