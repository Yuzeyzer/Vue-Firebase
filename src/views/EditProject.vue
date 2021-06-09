<template>
  <form @submit.prevent="handleSubmiit">
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
  methods: {
    async handleSubmiit() {
      await fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      });
      await this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    const fetchData = async () => {
      const response = await fetch(this.uri);
      const json = await response.json();
      this.title = json.title;
      this.details = json.details;
    };
    fetchData();
  },
};
</script>

<style>
</style>