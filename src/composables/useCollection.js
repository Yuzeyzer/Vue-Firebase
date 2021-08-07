import { ref } from 'vue'
import { firestore } from '../firebase/config'

const useCollection = (collection) => {
  const error = ref(null)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null

    try {
      const res =  await firestore.collection(collection).add(doc)

      error.value = null

      return res
      
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc }
}

export default useCollection
