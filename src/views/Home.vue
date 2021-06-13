<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
    <button @click="showPosts = !showPosts">Показать/Скрыть посты</button>
    <button @click="posts.pop()">Удалить пост</button>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import PostsList from "../components/PostsList.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: { PostsList, Spinner },
  setup() {
    const { posts, error, fetchBody } = getPosts();

    onMounted(() => fetchBody());

    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>