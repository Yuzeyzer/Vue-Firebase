<template>
  <form @submit.prevent="handleSubmiit">
    <label for="">Название задачи:</label>
    <input type="text" required v-model="title" />
    <label for="">Описание:</label>
    <textarea required v-model="details"></textarea>
    <button>Создать задачу</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    async handleSubmiit() {
      try {
        let project = {
          title: this.title,
          details: this.details,
          complete: false,
        };
        await fetch("http://localhost:3000/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(project),
        });
        await this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
form {
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: #00ce89;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>