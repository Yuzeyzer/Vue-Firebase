<template>
  <div class="tags-cloud">
    <h3>Теги</h3>
    <div></div>
  </div>
</template>

<script>
import useTags from "@/composables/useTags";

export default {
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
</style>