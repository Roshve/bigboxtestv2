<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-4">
    <div class="container">
    <v-carousel class="rounded-lg" height="400" :show-arrows="false">
    <v-carousel-item 
        v-for="img in activitys.image" 
      :key="img"
      :src="img"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
    </div>
    <div class="container">
      <h1 class="text-3xl font-mediun font-bold text-left">
        {{ activiti.title }}
      </h1>
      <h2 class="text-lg my-2">{{ activitys.description }}</h2>
      <p class="text-base my-4">Para {{ activiti.participants }} personas</p>
      <p class="text-base">{{ activitys.locations[0].province }}</p>
      <h3 class="text-2xl mt-12 font-medium">{{ activiti.points }}</h3>
    </div>
    <div class="container">
        <h2>Qu?</h2>      
    </div>
  </div>
</template>

<script>
import api from "@/api";


export default {
  name: "WhatIncludes",

  components: {
  },

  data() {
    return {
      activiti: {},
      activitys: {},
    };
  },

  created() {
    this.getActiviti();
  },
  methods: {
    getActiviti() {
      const id = this.$route.params.id;
      api
        .getActiviti(id)
        .then(
          (activiti) => (
            (this.activiti = activiti),
            (this.activitys = JSON.parse(activiti.activity))
          )
        );
    },
  },
};
</script>
