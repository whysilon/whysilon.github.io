<script setup>
import { RouterLink } from "vue-router";

import { onMounted } from "vue";

onMounted(async () => {
  await Clerk.load();
  const userButtonDiv = document.getElementById("user-button");

  Clerk.mountUserButton(userButtonDiv);
});
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="wrapper mx-auto">
      <nav class="flex justify-center space-x-4">
        <RouterLink to="/home" class="text-white hover:text-gray-400"
          >Home</RouterLink
        >
        <RouterLink to="/ar" class="text-white hover:text-gray-400"
          >AR</RouterLink
        >
      </nav>
      <div id="user-button"></div>
    </div>
  </header>
</template>
