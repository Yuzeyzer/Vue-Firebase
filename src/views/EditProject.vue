<template>
  <form>
    <label for="">Название задачи:</label>
    <input type="text" required v-model="title" />
    <label for="">Описание:</label>
    <textarea required v-model="details"></textarea>
    <button>Редактировать задачу</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    const fetchData = async () => {
      const response = await fetch(this.uri);
      const json = await response.json();
      console.log(json);
      this.title = json.title;
      this.details = json.details;
    };
    fetchData();
  },
};
</script>

<style>
</style>