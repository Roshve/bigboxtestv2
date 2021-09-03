<template>
  <div class="container">
    <div class="container">
      <splide :options="options" @splide:moved="moved">
        <splide-slide v-for="img in activitys.image" :key="img">
          <img
            class="rounded"
            :src="img"
            :alt="JSON.parse(activiti.activity).name"
          />
        </splide-slide>
      </splide>
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
  </div>
</template>

<script>
import api from "@/api";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "WhatIncludes",

  components: {
    Splide,
    SplideSlide,
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
