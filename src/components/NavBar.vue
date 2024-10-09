<script setup>
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import { onMounted,ref } from "vue";


onMounted(async () => {
  await Clerk.load();
  const userButtonDiv = document.getElementById("user-button");

  Clerk.mountUserButton(userButtonDiv);
});

const items = ref([
  { label: "Home", icon: "pi pi-home", to: "/home" },
  { label: "AR", icon: "pi pi-cog", to: "/home/ar" },
  { label: "CV", icon: "pi pi-cog", to: "/home/cv" },
])
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #item="{item, props, hasSubmenu, root}">
        <nav class="gap-2">
            <span :class="item.icon"></span>
            <Button as="RouterLink" :to="item.to" :label="item.label" class="--p-button-"></Button>
        </nav>
      </template>
      <template #end>
        <div id="user-button" ></div>
      </template>
    </Menubar>
    
  </header>
</template>

