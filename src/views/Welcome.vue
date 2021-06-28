<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm v-if="showForm" />
    <LoginForm v-else/>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const showForm = ref(true);

    return {showForm}
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>