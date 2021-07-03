import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Signup from '../views/auth/Signup'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
