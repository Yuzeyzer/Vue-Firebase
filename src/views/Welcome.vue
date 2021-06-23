<template>
  <div class="welcome container">
    <p>Welcome</p>
		<SignUpForm />
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
export default {
  components: { SignUpForm },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>