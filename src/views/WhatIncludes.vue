<template>
  <div class="grid md:grid-cols-2 gap-x-10 gap-y-12">
    <base-back @click="goToBack()" class="col-span-2 justify-start">
      <span>Atras</span>
    </base-back>
    <div class="grid grid-cols-1">
      <h1 class="text-3xl font-mediun font-bold text-left">
        {{ activiti.title }}
      </h1>
      <h2 class="text-lg my-2">{{ activitys.description }}</h2>
      <p class="text-base my-4">Para {{ activiti.participants }} personas</p>
      <p class="text-base">{{ city }}</p>
      <h3 class="text-2xl mt-12 font-medium">{{ activiti.points }}</h3>
    </div>
    <div class="sm:col-span-1 md:col-start-1 md:col-end-2">
      <h2 class="text-xl font-medium mb-2">¿Que Incluye?</h2>
      <hr />
      <hr />
      <hr />
      <div class="mt-8" v-html="activitys.benefits"></div>
    </div>
    <div class="md:col-start-1 md:col-end-2">
      <h2 class="text-xl font-bold mb-2">Reglas:</h2>
      <div>{{ activitys.small_print }}</div>
    </div>
    <div class="col-span-2">
      <h2 class="text-2xl font-bold mb-8">Otras actividades similares:</h2>
      <activity-card
        v-bind:activities="activities"
        class="grid grid-cols-4 gap-x-10"
      />
    </div>
  </div>
</template>

<script>
import api from "@/api";
import ActivityCard from "@/components/ActivityCard.vue";
import BaseBack from "@/components/BaseBack.vue";

export default {
  name: "WhatIncludes",

  components: { ActivityCard, BaseBack },

  data() {
    return {
      activiti: [],
      activitys: {},
      activities: [],
    };
  },
  computed: {
    city() {
      let i = 0;
      return this.activitys.locations[i].province;
    },
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
