<template>
  <form>
    <h4>Create New Playlist</h4>
    <input type="text" placeholder="Playlist title" required v-model="title">
    <textarea placeholder="Playlist description" required v-model="description"></textarea>
    <label>Upload playlist cover image</label>
    <input type="file">
    <button>Create</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>