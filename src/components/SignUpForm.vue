<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" v-model="name" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignup";
export default {
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { name, email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>