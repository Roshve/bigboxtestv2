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
        <div class="flex justify-between mt-3.5">
          <h1 class="font-bold">{{ activity.title }}</h1>
          <img
            v-if="JSON.parse(activity.activity).participants === 1"
            src="@/assets/icons/Participant.svg"
            class="h-4"
            alt="Participante"
          />
          <img
            v-else
            src="@/assets/icons/Participants.svg"
            class="h-4"
            alt="Participantes"
          />
        </div>
        <div class="container flex my-3">
          <img class="mr-2" src="@/assets/icons/Location.svg" alt="" />
          <p class="text-left text-sm font-normal">
            {{ JSON.parse(activity.activity).locations[0].province }}
          </p>
        </div>
        <div class="container">
          <p
            class="text-left font-normal overflow-hidden text-ellipsis leading-5 card-description"
          >
            {{ JSON.parse(activity.activity).description }}
          </p>
        </div>
        <div class="container mt-2 mb-2">
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

  computed: {},
};
</script>
<style scoped>
.card-description {
  height: 62px;
}
</style>
