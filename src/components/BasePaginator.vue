<template>
  <div class="text-center">
    <v-pagination :length="7" circle>
    </v-pagination>
    <div v-for="(item, idx) in link" :key="idx">
      <li>{{item._page}}</li>
      <li>{{item._limit}}</li>
      <li>{{item.rel}}</li>
      <li>{{item.url}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePaginator",

  props: {
    link: {
      type: Object,
    },
  },
};
</script>
