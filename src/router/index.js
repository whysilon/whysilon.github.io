import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { Clerk } from "@clerk/clerk-js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/ar",
      name: "ar",
      component: () => import("../views/ARView.vue"),
    },
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const clerkPubKey = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const clerk = new Clerk(clerkPubKey);

  // Ensure Clerk is fully loaded
  await clerk.load();

  // Check if the user is authenticated
  if (to.name != "login" && !clerk.user) {
    // If the user is not authenticated and is trying to access a protected route, redirect to login
    console.log("User not authenticated, redirecting to login...");
    return next({ name: "login" });
  } else if (to.name == "login" && clerk.user) {
    // If the user is authenticated and trying to access the login page, redirect to the home or dashboard
    console.log("User already authenticated, redirecting to home...");
  }

  // Allow the navigation
});
export default router;
