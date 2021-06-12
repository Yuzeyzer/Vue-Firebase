<template>
  <p ref="p">Меня зовут {{ name }} и мне {{ age }} лет</p>
  <button @click="handleClick">Нажми на меня</button>
  <button @click="age++">Увеличить возраст</button>
  <input type="text" v-model="name">
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const name = ref("Абдушукур");
    const age = ref(99);

    const p = ref(null);

    const handleClick = () => {
     name.value = 'Тентек';
     age.value = '12'
    };

    return { name, age, handleClick, p };
  },
};
</script>

<style>
</style>