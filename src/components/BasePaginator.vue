<template>
  <div></div>
</template>
<script>
import api from "@/api";

export default {
  name: "BasePaginator",

  data() {
    return {
      activiti: {},
      activitys: {},
    };
  },

  created() {
    this.getActiviti();
  },
  methods: {
    getActiviti() {
      const id = this.$route.params.id;
      api
        .getActiviti(id)
        .then(
          (activiti) => (
            (this.activiti = activiti),
            (this.activitys = JSON.parse(activiti.activity))
          )
        );
    },
  },
};
</script>
