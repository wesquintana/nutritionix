import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Logs from "../views/Logs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/logs",
    name: "logs",
    component: Logs
  }
];

const router = new VueRouter({
  routes
});

export default router;
