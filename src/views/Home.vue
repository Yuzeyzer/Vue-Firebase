<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Project },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.error(error));
  },
};
</script>
