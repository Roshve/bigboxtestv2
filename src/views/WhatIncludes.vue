<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-12">
    <base-back @click="goToBack()" class="flex justify-start">
      <span>Atras</span>
    </base-back>
    <div></div>
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
      <h2 class="text-xl font-medium mb-2">¿Que Incluye?</h2>
      <hr />
      <hr />
      <hr />
      <div class="mt-8" v-html="activitys.benefits"></div>
    </div>
    <div class="container"></div>
    <div class="container">
      <h2 class="text-xl font-bold mb-2">Reglas:</h2>
      <div>{{ activitys.small_print }}</div>
    </div>
    <div class="container"></div>
    <div class="container">
      <h2 class="text-2xl font-bold mb-2">Otras actividades similares:</h2>
    </div>
    <div class="col-span-2">
      <v-carousel
        class="rounded-lg"
        :show-arrows="false"
        hide-delimiters
        height="430"
      >
        <v-carousel-item>
          <base-card
            v-bind:activities="activities"
            class="grid grid-cols-4 gap-x-10"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import BaseCard from "@/components/BaseCard.vue";
import BaseBack from "@/components/BaseBack.vue";

export default {
  name: "WhatIncludes",

  components: { BaseCard, BaseBack },

  data() {
    return {
      activiti: [],
      activitys: {},
    };
  },

  created() {
    this.getActiviti();
    api.getActivities().then((activities) => (this.activities = activities));
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
    goToBack() {
      return this.$router.push({ name: "all-activities" });
    },
  },
};
</script>
