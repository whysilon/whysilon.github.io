<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello!");
    const changeMsg = () => {
      if (message.value === "Hello") {
        message.value = "Hey";
      } else {
        message.value = "Hello";
      }
    };
    return {
      message,
      changeMsg,
    };
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">{{ message }}</h1>
    <button @click="changeMsg">Change Message</button>
    <button @click="goToAbout">Go to About</button>
  </main>
</template>
