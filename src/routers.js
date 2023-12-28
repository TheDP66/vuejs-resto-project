import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./components/HomePage.vue";
import SignUpVue from "./components/SignUp.vue";

const routes = [
  {
    name: "Home",
    component: HomePageVue,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUpVue,
    path: "/sign-up",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
