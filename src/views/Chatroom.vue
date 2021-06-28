<template>
  <div class="container">
    <Navbar />
    <p>Chatroom</p>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { Navbar },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user,() => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>