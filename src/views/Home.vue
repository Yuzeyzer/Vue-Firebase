<template>
  <p ref="p">Меня зовут {{ name }} и мне {{ age }} лет</p>
  <button @click="handleClick">Нажми на меня</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    let name = "Абдушукур";
    let age = 99;

    const p = ref(null);

    const handleClick = () => {
      console.log("Ты нажал на меня!!!");
      console.log(p.value, 'мы сохранили элемент в переменной p');
    };

    return { name, age, handleClick, p };
  },
};
</script>

<style>
</style>