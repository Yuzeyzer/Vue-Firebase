<template>
  <div class="home">
    <h1>Home</h1>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostsList from "../components/PostsList.vue";

export default {
  name: "Home",
  components: { PostsList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Добро пожаловать в Блог",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias non asperiores corporis necessitatibus repudiandae delectus optio, consequatur ad, illo praesentium corrupti minus nisi, facilis nesciunt architecto ut aliquid omnis rerum adipisci natus esse. Error beatae dolorem sunt reiciendis suscipit, ea sit! Odio nam libero aperiam consequuntur officiis, commodi quibusdam!",
      },
      {
        id: 2,
        title: "5 CSS свойств которые спасут вам жизнь!!!",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias non asperiores corporis necessitatibus repudiandae delectus optio, consequatur ad, illo praesentium corrupti minus nisi, facilis nesciunt architecto ut aliquid omnis rerum adipisci natus esse. Error beatae dolorem sunt reiciendis suscipit, ea sit! Odio nam libero aperiam consequuntur officiis, commodi quibusdam!",
      },
    ]);
    return { posts };
  },
};
</script>

<style>
</style>