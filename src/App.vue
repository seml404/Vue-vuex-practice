<template>
  <div id="app">
    <nav-bar />
    <div class="container">
      <h2>counter: {{ counter }}</h2>
      <h2>Double counter: {{ doubleCounter }}</h2>

      <button @click="increment">Увеличить</button>
      <button @click="add">Увеличить на 5</button>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  methods: {
    increment() {
      // this.$store.state.counter++;
      this.$store.commit("increment");
    },
    add() {
      // this.$store.state.counter++;
      // this.$store.commit("addNumber", 5);
      this.$store.commit("addNumber", { value: 5 });
    },
  },
  components: { NavBar },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    counter() {
      return this.$store.getters.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: #ffff;
}
</style>
