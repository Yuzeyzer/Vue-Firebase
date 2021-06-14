import { ref } from 'vue';
import firestore from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchBody = async () => {
    try {
      const response = await firestore.collection('blogs').get();
      posts.value = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };
  return { posts, error, fetchBody };
};

export default getPosts;
