import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ARView from "@/views/ARView.vue";
import ComputerVision from "@/views/ComputerVision.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {requiresAuth: true},
      children: [
        {
          path: "ar",
          name: "ar",
          component: ARView
        },
        {
          path: "cv",
          name: "computer-vision",
          component: ComputerVision
        }
      ]
    },
    {
      path: "/",
      name: "login",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  // Ensure Clerk is fully loaded
  await Clerk.load();
  console.log(to)
  // Check if the user is authenticated
  if (to.meta.requiresAuth && !Clerk.user) {
    // If the user is not authenticated and is trying to access a protected route, redirect to login
    console.log("User not authenticated, redirecting to login...");
    return {path: '/'}
  }
  else if (!to.meta.requiresAuth && Clerk.user) {
    // If the user is authenticated and is trying to access a public route, redirect to home
    console.log("User authenticated, redirecting to home...");
    return {path: '/home'}
  }
});
export default router;
