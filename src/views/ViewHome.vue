<template>
  <main class="grid grid-rows-1">
    <group-card
      :activities="activities"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-5 gap-y-6"
    />
    <activity-paginator class="mt-16" :link="parseLink" />
  </main>
</template>

<script>
import GroupCard from "@/components/GroupCard.vue";
import ActivityPaginator from "@/components/ActivityPaginator.vue";

export default {
  name: "ViewHome",

  components: { GroupCard, ActivityPaginator },

  computed: {
    activities() {
      return this.$store.state.activities;
    },

    headerLink() {
      return this.$store.state.link;
    },

    parseLink() {
      let parse = require("parse-link-header");
      return parse(this.headerLink);
    },
  },

  mounted() {
    this.$store.dispatch("getActivities");
  },
};
</script>
