<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const names = ref([
      "Сейтек",
      "Бекжан",
      "Али",
      "Аки",
      "Аэлина",
      "Кочкорбек",
    ]);
    const search = ref("");

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>

<style>
</style>