import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Signup from '../views/auth/Signup'
import CreatePlaylist from '../views/playlists/CreatePlaylist'
import PlaylistDetails from '../views/playlists/PlaylistDetails'
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
	let user = auth.currentUser
	if (!user) return next({ name: 'Login' })
  return next()
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
    beforeEnter: requireAuth,
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
	{
		path: '/playlists/create',
		name: 'CreatePlaylist',
		component: CreatePlaylist,
		beforeEnter: requireAuth,
	},
  {
		path: '/playlists/:id',
		name: 'PlaylistDetails',
		component: PlaylistDetails,
		beforeEnter: requireAuth,
    props: true
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
