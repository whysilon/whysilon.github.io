<script>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="main">
      <NavBar/>
      <RouterView/>   
    </div>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
