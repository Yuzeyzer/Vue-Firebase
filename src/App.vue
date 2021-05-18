<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>{{header}}</h1>
      <p>{{text}}</p>
      <template v-slot:links>
        <a href="#">Sign Up now</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
    
  </div>
  <button @click="toggleModal">Show Modal!</button>
</template>

<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      header: 'Sign up for the Giweaway!',
      text: "Hello brothers!!! And goodbye...",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
     this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
