<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => console.log("Монтирование Компонента"));
    onUnmounted(() => console.log("Размонтирование Компонента"));
    onUpdated(() => console.log("Обновление Компонента"));
  },
};
</script>

<style>
</style>