<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" v-model="name" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignup";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
    };

    return { name, email, password, handleSubmit };
  },
};
</script>

<style>
</style>