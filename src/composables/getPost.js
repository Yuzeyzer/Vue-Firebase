import { ref } from 'vue';
import firestore from '../firebase/config';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchBody = async () => {
    try {
      const response = await firestore
        .collection('blogs')
        .doc(id)
        .get();

      if (!response.exists) {
				throw new Error('Такого блога нет')
      }
      post.value = { ...response.data(), id };
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };
  return { post, error, fetchBody };
};

export default getPost;
