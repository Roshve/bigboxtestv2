<template>
  <div class="grid grid-rows-1">
    <activity-card
      :data-activities="activities"
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-3
        gap-x-5 gap-y-6
      "
    />
    <base-paginator
      v-bind:page="page"
      v-bind:link="parseLink(link)"
      class="mt-8"
    />
    <div justify-center>{{ count }}</div>
  </div>
</template>

<script>
import api from "@/api";
import ActivityCard from "@/components/ActivityCard.vue";
import BasePaginator from "@/components/BasePaginator.vue";

export default {
  name: "ViewHome",

  components: { ActivityCard, BasePaginator },

  data() {
    return {
      activities: [],
      page: 1,
      count: "",
      link: "",
    };
  },

  created() {
    api.getLink().then((link) => (this.link = link));
    api.getCount().then((count) => (this.count = count));
    let page = this.page;
    api.getPaginas(page).then((activities) => (this.activities = activities));
  },
  methods: {
    parseLink(link) {
      let parse = require("parse-link-header");
      return parse(link);
    },
  },
};
</script>
