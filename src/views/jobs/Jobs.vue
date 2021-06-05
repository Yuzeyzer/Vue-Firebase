<template>
  <h1>Вакансии</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
	<div v-else>
		<p>Loading jobs...</p>
	</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    const fetchingData = async () => {
      try {
        const data = await fetch("http://localhost:3000/jobs");
        const json = await data.json();
        this.jobs = json;
      } catch (e) {
        console.log(e);
      }
    };
    fetchingData();
  },
};
</script>

<style>
.job h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background-color: #ddd;
}
.job a {
  text-decoration: none;
}
</style>