<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="filteredTags.length" class="tag">
    <PostsList :posts="filteredTags" />
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import { useRoute } from "vue-router";
import getPosts from "@/composables/getPosts";
import PostsList from "@/components/PostsList.vue";
import Spinner from "@/components/Spinner.vue";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  components: { PostsList, Spinner },
  setup() {
    const route = useRoute();
    const tag = route.params.tag;
    const { posts, error, fetchBody } = getPosts();

    const filteredTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });

    onMounted(() => {
      fetchBody();
    });

    return { filteredTags, error };
  },
};
</script>

<style>
</style>