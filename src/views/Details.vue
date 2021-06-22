<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleDelete">Удалить</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import getPost from "@/composables/getPost";
import Spinner from "../components/Spinner.vue";
import {firestore} from "../firebase/config";

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { post, error, fetchBody } = getPost(route.params.id);
    fetchBody();

    const handleDelete = async () => {
      await firestore.collection("blogs").doc(props.id).delete();
      router.push("/");
    };
    return { post, error, handleDelete };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.props p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>