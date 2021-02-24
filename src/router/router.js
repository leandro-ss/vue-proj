import { createWebHistory, createRouter } from "vue-router";
import Home from "@/features/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
