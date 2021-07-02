import { ref } from 'vue'
import { auth } from '../firebase/config'

// refs
const user = ref(auth.currentUser)

// auth changes
auth.onAuthStateChanged((_user) => {
  console.log('User state change. Current user is:', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
