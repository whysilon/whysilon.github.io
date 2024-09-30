<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="wrapper mx-auto">
      <nav class="flex justify-center space-x-4">
        <RouterLink to="/" class="text-white hover:text-gray-400">Home</RouterLink>
        <RouterLink to="/about" class="text-white hover:text-gray-400">About</RouterLink>
        <RouterLink to="/ar" class="text-white hover:text-gray-400">AR</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
