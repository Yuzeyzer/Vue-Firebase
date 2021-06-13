<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Идет загрузка данных...</div>
    <button @click="showPosts = !showPosts">Показать/Скрыть посты</button>
    <button @click="posts.pop()">Удалить пост</button>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import PostsList from "../components/PostsList.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: { PostsList },
  setup() {
    const { posts, error, fetchBody } = getPosts();

    onMounted(() => fetchBody());

    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>

<style>
</style>