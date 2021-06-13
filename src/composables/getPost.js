import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchBody = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const response = await fetch('http://localhost:3000/posts/' + id);

      if (!response.ok) {
        throw Error('No data available');
      }

      post.value = await response.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };
  return { post, error, fetchBody };
};

export default getPost;
