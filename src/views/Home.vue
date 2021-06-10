<template>
  <div class="home">
    <FilterNav
      :currentFilter="currentFilter"
      @filterChange="currentFilter = $event"
    />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <Project
          @update="handleUpdate"
          @delete="handleDelete"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";
import FilterNav from "@/components/FilterNav.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Project, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: "all",
    };
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleUpdate(id) {
      let project = this.projects.find((project) => project.id === id);
      project.complete = !project.complete;
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.error(error));
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.currentFilter === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
