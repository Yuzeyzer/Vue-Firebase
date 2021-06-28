import { ref } from 'vue'
import { auth } from '@/firebase/config'

const user = ref(auth.currentUser)

auth.onAuthStateChanged((_user) => {
  console.log('current user is:', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
