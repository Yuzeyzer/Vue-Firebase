<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Project @delete="handleDelete" :project="project" />
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
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.error(error));
  },
};
</script>
