<template>
  <router-link :to="{ name: 'what-includes', params: { id: activity.id } }">
    <img
      class="w-fit rounded h-60 m-0"
      :src="activityParse.image[0]"
      :alt="activityParse.name"
    />
    <div class="flex justify-between mt-3.5">
      <h1 class="font-bold">{{ activity.title }}</h1>
      <img
        v-if="activityParse.participants === 1"
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
        {{ activityParse.locations[0].province }}
      </p>
    </div>
    <div class="container">
      <p
        class="text-left font-normal overflow-hidden text-ellipsis leading-5 card-description"
      >
        {{ activityParse.description }}
      </p>
    </div>
    <div class="container mt-2 mb-2">
      <p class="text-lg font-mediun font-bold text-left">
        {{ activity.points }} puntos
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ActivityCard",

  props: {
    activity: {
      type: Object,
      default: () => {},
      required: true,
    },
  },

  computed: {
    activityParse() {
      return JSON.parse(this.activity.activity);
    },
  },
};
</script>
<style scoped>
.card-description {
  height: 62px;
}
</style>
