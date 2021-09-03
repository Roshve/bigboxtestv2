<template>
  <div>
    <base-card v-bind:activities="activities" />
  </div>
</template>

<script>
import api from "@/api";
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "AllActivities",

  components: { BaseCard },

  data() {
    return {
      activities: [],
      page: 1,
      pages: 1,
    };
  },

  created() {
    api.getActivities().then(
      (activities) =>
        (this.activities = activities) /* .map(function(activities) {
        return JSON.parse(activities.activity)
    }) */
    );
  },
};
</script>
