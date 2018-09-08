<template>
  <div>
    <h2>Alcohol</h2>
    <ul>
        <li v-for="alco in alcos" :key="alco.id">{{alco.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AlcoList",
  props: {
    alcos: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
</style>
