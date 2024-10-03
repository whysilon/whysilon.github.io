<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import Toolbar from "primevue/toolbar";

onMounted(async () => {
  await Clerk.load();
  const userButtonDiv = document.getElementById("user-button");

  Clerk.mountUserButton(userButtonDiv);
});
</script>

<template>
  <header class="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
    <Toolbar>
      <template #start>
      <nav>
          <Button as="RouterLink" to="/home" label="Home" primary/>
          <Button as="RouterLink" to="/home/ar" label="AR" primary/>
      </nav>
      </template>
      <template #end>
        <div id="user-button" ></div>
      </template>
    </Toolbar>
  </header>
</template>

