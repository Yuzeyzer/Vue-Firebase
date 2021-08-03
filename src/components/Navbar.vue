<template>
	<div class="navbar">
		<nav>
			<img src="@/assets/logo.png" />
			<h1><router-link :to="{ name: 'Home' }">Muic</router-link></h1>
			<div class="links">
				<router-link v-if="user" :to="{name: 'CreatePlaylist'}">Create Playlist</router-link>
				<button v-if="user" @click="handleLogOut">Log Out</button>
				<div v-else>
					<router-link class="btn" :to="{ name: 'Signup' }"
						>Sign Up</router-link
					>
					<router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
export default {
	setup() {
		const { logout } = useLogout();
		const router = useRouter();
		const { user } = getUser();

		const handleLogOut = async () => {
			await logout();
			console.log("User is logged out");
			router.push({ name: "Login" });
		};
		return { handleLogOut, user };
	},
};
</script>

<style scoped>
.navbar {
	padding: 16px 10px;
	margin-bottom: 60px;
	background: white;
}
nav {
	display: flex;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}
nav img {
	max-height: 60px;
	object-fit: contain;
}
nav h1 {
	margin-left: 20px;
}
nav .links {
	margin-left: auto;
}
nav .links a,
button {
	margin-left: 16px;
	font-size: 14px;
}
</style>