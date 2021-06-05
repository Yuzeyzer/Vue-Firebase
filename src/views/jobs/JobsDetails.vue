<template>
  <h1>Описание вакансии</h1>
  <p>ID вакансии : {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>