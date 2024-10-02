<template>
  <main>
    <div id="sign-in" v-if="signedOut"></div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
const signedOut = ref(true);

onMounted(async() => {
    await Clerk.load();
    console.log(Clerk)
    console.log(signedOut)
    if (Clerk.user) {
        signedOut.value = false;
    }
    else {
        const signInDiv = document.getElementById("sign-in");
        Clerk.mountSignIn(signInDiv);
    }    
});
</script>

