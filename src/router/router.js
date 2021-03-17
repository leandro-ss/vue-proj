import { createWebHistory, createRouter } from "vue-router";
import Home from "@/features/home/Home.vue";
import About from "@/features/home/About.vue";
import Timeline from "@/features/home/Timeline.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
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
