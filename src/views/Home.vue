<template>
  <div class="home container">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="grid">
      <PostsList v-if="showPosts" :posts="posts" />
      <TagsCloud :posts="posts" />
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
import TagsCloud from "../components/TagsCloud.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: { PostsList, Spinner, TagsCloud },
  setup() {
    const { posts, error, fetchBody } = getPosts();

    onMounted(() => fetchBody());

    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>