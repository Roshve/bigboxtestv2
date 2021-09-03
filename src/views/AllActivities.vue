<template>
  <div class="grid grid-rows-1">
    <base-card
      v-bind:activities="activities"
      class="grid grid-cols-3 gap-x-5 gap-y-6"
    />
    <base-paginator class="mt-8" />
  </div>
</template>

<script>
import api from "@/api";
import BaseCard from "@/components/BaseCard.vue";
import BasePaginator from "@/components/BasePaginator.vue";

export default {
  name: "AllActivities",

  components: { BaseCard, BasePaginator },

  data() {
    return {
      activities: [],
    };
  },

  created() {
    api.getActivities().then((activities) => (this.activities = activities));
  },
};
</script>
