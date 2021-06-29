<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import NewChatRoom from "../components/NewChatRoom.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatRoom,ChatWindow},
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>