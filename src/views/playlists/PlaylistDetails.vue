<template>
	<div v-if="error" class="error">{{ error }}</div>
	<div v-if="playlist" class="playlist-details">
		<div class="playlist-info">
			<div class="cover">
				<img :src="playlist.coverUrl" :alt="playlist.title" />
			</div>
			<h2>{{ playlist.title }}</h2>
			<p class="username">Created by {{ playlist.userName }}</p>
			<div class="description">{{ playlist.description }}</div>
			<button v-if="ownership" @click="handleDelete">Delete Playlist</button>
		</div>
		<div class="song-list">
			<p>Song List Here</p>
		</div>
	</div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import useDocument from "@/composables/useDocument";
import useStorage from "@/composables/useStorage";
import getUser from "@/composables/getUser";
import { computed } from "@vue/runtime-core";

export default {
	props: ["id"],
	setup(props) {
		const { document: playlist, error } = getDocument("playlists", props.id);
		const { deleteDoc } = useDocument("playlists", props.id);
		const { deleteImage } = useStorage();
		const { user } = getUser();

		const ownership = computed(() => {
			return (
				playlist.value && user.value && user.value.uid === playlist.value.userId
			);
		});

		const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
			await deleteDoc();
		};
		return { playlist, error, ownership, handleDelete };
	},
};
</script>

<style>
.playlist-details {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 80px;
}
.cover {
	overflow: hidden;
	border-radius: 20px;
	position: relative;
	padding: 160px;
}
.cover img {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100%;
	min-height: 100%;
	max-width: 200%;
	max-height: 200%;
}
.playlist-info {
	text-align: center;
}
.playlist-info h2 {
	text-transform: capitalize;
	font-size: 28px;
	margin-top: 20px;
}
.playlist-info p {
	margin-bottom: 20px;
}
.username {
	color: #999;
}
.description {
	text-align: left;
}
.single-song {
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px dashed var(--secondary);
	margin-bottom: 20px;
}
</style>