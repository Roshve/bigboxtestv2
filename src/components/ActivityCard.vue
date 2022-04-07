<template>
  <div>
    <div
      v-for="activity in dataActivities"
      :key="activity.id"
      class="container"
    >
      <router-link :to="{ name: 'what-includes', params: { id: activity.id } }">
        <div class="container">
          <img
            class="rounded"
            :src="JSON.parse(activity.activity).image[0]"
            :alt="JSON.parse(activity.activity).name"
          />
        </div>
        <div class="flex justify-between my-3">
          <h1 class="font-bold">{{ activity.title }}</h1>
          <p>{{ JSON.parse(activity.activity).participants }} personas</p>
          <!-- <img src="../assets/person_outline_black_24dp.svg" alt="" /> -->
        </div>
        <div class="container my-2">
          <img src="" alt="" />
          <p class="text-left text-sm font-medium">
            {{ JSON.parse(activity.activity).locations[0].province }}
          </p>
        </div>
        <div class="container">
          <p class="text-left">
            {{ JSON.parse(activity.activity).description }}
          </p>
        </div>
        <div class="container my-2">
          <p class="text-lg font-mediun font-bold text-left">
            {{ activity.points }} puntos
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",

  props: {
    dataActivities: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
