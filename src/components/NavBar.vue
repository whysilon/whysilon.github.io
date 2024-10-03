<script setup>
import { onMounted } from "vue";
import Toolbar from "primevue/toolbar";

onMounted(async () => {
  await Clerk.load();
  const userButtonDiv = document.getElementById("user-button");

  Clerk.mountUserButton(userButtonDiv);
});
</script>

<template>
  <header>
    <Toolbar>
      <template #start>
      <nav>
          <Button as="RouterLink" to="/home" label="Home" class="--p-button-"/>
          <Button as="RouterLink" to="/home/ar" label="AR"/>
      </nav>
      </template>
      <template #end>
        <div id="user-button" ></div>
      </template>
    </Toolbar>
  </header>
</template>

