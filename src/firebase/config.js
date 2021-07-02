import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyACfv9S9v0KQx5CTOd0t-vXMa3iVI4pfbI',
  authDomain: 'muic-87ddc.firebaseapp.com',
  projectId: 'muic-87ddc',
  storageBucket: 'muic-87ddc.appspot.com',
  messagingSenderId: '262961970236',
  appId: '1:262961970236:web:0bfabd7bf16d4df35fd739',
}
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestore = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, storage, timestamp }
