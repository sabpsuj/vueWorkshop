<template>
  <div id="app">
    <h1>{{ foxTalk }}</h1>
    <alco-list 
    :alcos="sharedState.products"
    ></alco-list>
  </div>
</template>

<script>
import axios from "axios";
import store from "./store";

import AlcoList from "./components/AlcoList.vue";

export default {
  name: "app",
  components: {
    AlcoList
  },
  data() {
    return {
      foxTalk: "What does the fox say?",
      sharedState: store.state
    };
  },
  created() {
    store.fetchProducts();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
