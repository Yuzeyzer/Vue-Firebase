import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDhkxg_yTJ1AUZNwSMjJtn6DBycHU-uUL0',
  authDomain: 'vue-firebase-a3b98.firebaseapp.com',
  projectId: 'vue-firebase-a3b98',
  storageBucket: 'vue-firebase-a3b98.appspot.com',
  messagingSenderId: '619164694098',
  appId: '1:619164694098:web:bb048395de0d1389c4518b',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore ,timestamp,auth}
