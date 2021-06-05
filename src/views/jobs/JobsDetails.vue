<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>ID вакансии : {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    const fetchingData = async () => {
      try {
        const data = await fetch("http://localhost:3000/jobs/" + this.id);
        const response = await data.json();
        this.job = await response;
        console.log(this.job);
      } catch (e) {
        console.log(e);
      }
    };
    fetchingData();
  },
};
</script>

<style>
</style>