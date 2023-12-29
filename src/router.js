import { createRouter, createWebHistory } from "vue-router";
import AddPageVue from "./components/AddPage.vue";
import HomePageVue from "./components/HomePage.vue";
import LoginPageVue from "./components/LoginPage.vue";
import SignUpVue from "./components/SignUp.vue";
import UpdatePageVue from "./components/UpdatePage.vue";
import AppLayoutVue from "./layouts/AppLayout.vue";

const routes = [
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
  {
    name: "Home",
    component: HomePageVue,
    path: "/",
    meta: {
      layout: AppLayoutVue,
    },
  },
  {
    name: "Add",
    component: AddPageVue,
    path: "/add",
    meta: {
      layout: AppLayoutVue,
    },
  },
  {
    name: "Update",
    component: UpdatePageVue,
    path: "/update",
    meta: {
      layout: AppLayoutVue,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem("user-info");

  if (!user && to.name !== "LoginPage" && to.name !== "SignUp") {
    next({ name: "LoginPage" });
  } else {
    next();
  }
});

export default router;
