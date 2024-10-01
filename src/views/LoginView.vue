<template>
  <div id="sign-in" v-if="signedOut"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const signedOut = ref(true);

onMounted(async () => {
  await Clerk.load();
  const signInDiv = document.getElementById("sign-in");
  Clerk.mountSignIn(signInDiv);

  console.log("ClerkJS is loaded");
});
</script>
