<template>
  <div id="app">
    <BigBoxCard />
  </div>
</template>

<script>
import BigBoxCard from "@/components/BigBoxCard.vue";

export default {
  name: "App",
  components: {
    BigBoxCard,
  },
};
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
