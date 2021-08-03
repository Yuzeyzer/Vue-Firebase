<template>
	<div class="home">
		<div v-if="error" class="error">Could not fetch the data</div>
		<div v-if="documents">
			<ListView :playlists="documents" />
		</div>
	</div>
</template>

<script>
import ListView from "@/components/ListView.vue";
import getColection from "../composables/getCollection";
export default {
	name: "Home",
	components: {ListView},
	setup() {
		const { error, documents } = getColection("playlists");
		return { error, documents };
	},
};
</script>

<style>
</style>