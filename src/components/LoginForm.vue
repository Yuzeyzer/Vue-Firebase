<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log( email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>