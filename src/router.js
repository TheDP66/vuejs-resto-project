import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./components/HomePage.vue";
import LoginPageVue from "./components/LoginPage.vue";
import SignUpVue from "./components/SignUp.vue";

const routes = [
  {
    name: "Home",
    component: HomePageVue,
    path: "/",
    meta: {
      layout: "AppLayout",
    },
  },
  {
    name: "SignUp",
    component: SignUpVue,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPageVue,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
