import { ref } from 'vue'
import { firestore } from '@/firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = firestore.collection(collection).orderBy('createdAt')

  collectionRef.onSpanshot(
    (span) => {
      documents.value = span.docs.map((doc) => {
        return doc.data().createdAt && { ...doc.data(), id: doc.id }
      })
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
