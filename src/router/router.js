import { createWebHistory, createRouter } from "vue-router";
import Home from "@/features/home/Home.vue";
import About from "@/features/home/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
