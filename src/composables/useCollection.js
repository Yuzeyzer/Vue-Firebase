import { ref } from 'vue'
import { firestore } from '@/firebase/config'

const useCollection = (collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null
    try {
      await firestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      err.value = 'Произошла ошибка во время отправки сообщения'
    }
  }

  return { addDoc, error }
}

export default useCollection
