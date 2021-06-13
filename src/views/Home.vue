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

export default {
  name: "Home",
  components: { PostsList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const fetchingPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
          throw Error("No data available");
        }

        posts.value = await response.json();
      } catch (e) {
        error.value = e.message;
        console.log(error.value);
      }
    };

    onMounted(() => fetchingPosts());

    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};
</script>

<style>
</style>