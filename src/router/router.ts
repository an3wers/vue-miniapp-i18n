import { createWebHistory, createRouter } from "vue-router";

const isAuthenticated = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/RegisterPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.path === "/" && !isAuthenticated) {
    next({ path: "/register" });
  } else {
    next();
  }
});

export { router };
