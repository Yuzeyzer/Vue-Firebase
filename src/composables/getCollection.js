import { ref } from 'vue'
import { firestore } from '@/firebase/config'

const getCollection =  (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = firestore.collection(collection).orderBy('createdAt')

  collectionRef.onSnapshot(
    (snap) => {
      let result = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && result.push({ ...doc.data(), id: doc.id })
      })
      documents.value = result
      error.value = null
    },
    (error) => {
      console.log(error.message)
      documents.value = null
      error.value = 'Не возможно получить данные'
    },
  )
  return { documents, error }
}

export default getCollection
