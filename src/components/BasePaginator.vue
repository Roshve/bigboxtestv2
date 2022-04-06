<template>
  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="8"
      circle
    >
    </v-pagination>
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

  computed: {
    currentPage: {
      get() {
        return parseInt(this.link.first._page, 10);
      },
    },
    lastPage: {
      get() {
        return parseInt(this.link.last._page, 10);
      },
    },
  },
};
</script>
