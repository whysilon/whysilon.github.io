import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
          component: () => import("../views/ARView.vue"),
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
    return {path: '/', query: {redirect: to.fullPath}}
  }

});
export default router;
