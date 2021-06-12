<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ person.name }} - {{ person.age }}</p>
    <button @click="updatePerson">Обновить пользователя</button>
    <h2>Reactivity</h2>
    <p>{{ person2.name }} - {{ person2.age }}</p>
    <button @click="updatePerson2">Обновить пользователя</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const person = ref({ name: "Бекжан", age: 12 });
    const person2 = reactive({ name: "Сейтек", age: 13 });

    const name = reactive('Али'); // Ошибка, функции reactive не стоит 
                                  // принимать примитивный тип данных,он не будет реактивным 

    const updatePerson = () => {
      person.value.age = 19;
    };

    const updatePerson2 = () => {
      person2.age = 19;

      name = 'Байкуш' // значение не будет динамически обновлено
    };

    return { person, person2, updatePerson, updatePerson2 };
  },
};
</script>

<style>
</style>