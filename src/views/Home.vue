<template>
  <p>Меня зовут {{ name }} и мне {{ age }} лет</p>
  <button @click="handleClick">Нажми на меня</button>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "Абдушукур";
    let age = 99;

    const handleClick = () => {
      console.log("Ты нажал на меня!!!");
    };

    return { name, age, handleClick };
  },
};
</script>

<style>
</style>