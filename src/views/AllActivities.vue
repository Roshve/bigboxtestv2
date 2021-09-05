<template>
  <div class="grid grid-rows-1">
    <base-card
      v-bind:activities="activities"
      class="grid grid-cols-3 gap-x-5 gap-y-6"
    />
    <base-paginator v-bind:page="page" v-bind:link="parseLink(link)" class="mt-8" />
    <div justify-center>{{count}}</div>
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
      page: 1,
      count: "",
      link: "",
    };
  },

  created() {
    api.getLink().then(link =>(this.link = link))
    api.getCount().then((count => (this.count = count)))
    let page = this.page;
    api.getPaginas(page).then((activities) => (this.activities = activities));
  },
  methods: {
      parseLink(link){
      let parse = require('parse-link-header');
      return parse(link)
      }
        
  }
};
</script>
