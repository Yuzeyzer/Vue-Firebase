<template>
  <h1>Вакансии</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Frontend Разработчик",
          details: "Нужен Frontend Разработчик на работу в Yandex",
        },
        {
          id: 2,
          title: "Backend Разработчик",
          details: "Нужен Backend Разработчик в Ош базар",
        },
        {
          id: 3,
          title: "Full - Stack Разработчик",
          details: "Нужен Full - Stack Разработчик в Google",
        },
      ],
    };
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