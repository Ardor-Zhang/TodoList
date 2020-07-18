import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/all",
    name: "All",
    component: () => import("../views/All/index.vue")
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo/index.vue")
  },
  {
    path: "/done",
    name: "Done",
    component: () => import("../views/Done/index.vue")
  },
  {
    path: "/*",
    redirect: "/all"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
