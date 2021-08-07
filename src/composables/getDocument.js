import { ref, watchEffect } from 'vue'
import { firestore } from '../firebase/config'

const getDocument = (collection,id) => {
  const document = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let documentRef = firestore.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        document.value =  {...doc.data(), id: doc.id}
        error.value = null
      }
      else {
        error.value = 'that document dost not exist'
      }
    },
    (err) => {
      document.value = null
      error.value = `could not fetch the data, ${err.message}`
    },
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { error, document }
}

export default getDocument
