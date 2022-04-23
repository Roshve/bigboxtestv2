<template>
  <section>
    <article class="card-img" v-for="activity in activities" :key="activity.id">
      <activity-card :activity="activity" />
    </article>
  </section>
</template>

<script>
import ActivityCard from "@/components/ActivityCard.vue";

export default {
  name: "GroupCard",

  components: {
    ActivityCard,
  },

  props: {
    activities: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
<style scoped>
.card-img {
  width: 360px;
}
</style>
