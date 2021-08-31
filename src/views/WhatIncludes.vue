<template>
  <div>hola</div>
</template>

<script>
import api from "@/api";
export default {
  name: "WhatIncludes",

  data() {
    return {
      activiti: {},
    };
  },
  created() {
    this.getActiviti();
  },
  methods: {
    getActiviti() {
      const id = this.$route.params.id;
      api.getActiviti(id).then((activiti) => (this.activiti = activiti));
    },
  },
};
</script>
