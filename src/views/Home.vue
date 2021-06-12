<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleStopClick">Остановить вызов Слежек/Подписок</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

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

    const stopWatch = watch(search, () => {
      console.log("Запуск слежки");
    });

    const stopEffect = watchEffect(() => {
      console.log("Запуск слежки эффекта");
    });

    const handleStopClick = () => {
      stopWatch();
      stopEffect();
    };

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames, handleStopClick };
  },
};
</script>

<style>
</style>