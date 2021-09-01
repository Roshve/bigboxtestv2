<template>
  <div class="container">
    <div class="container">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="im-warpper">
          <img src="`https://picsum.photos/200/100?random=${i}`" />
        </div>
      </VueSlickCarousel>
    </div>
    <div class="container">
      <h1 class="text-3xl font-mediun font-bold text-left">
        {{ activiti.title }}
      </h1>
      <h2 class="text-lg my-2">
        {{ JSON.parse(activiti.activity).description }}
      </h2>
      <p class="text-base my-4">Para {{ activiti.participants }} personas</p>
      <p class="text-base">
        {{ JSON.parse(activiti.activity).locations[0].province }}
      </p>
      <h3 class="text-2xl mt-12 font-medium">{{ activiti.points }}</h3>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "WhatIncludes",

  components: { VueSlickCarousel },

  data() {
    return {
      activiti: {},
      settings: {
        slickOptions: {
          slidesToShow: 3,
        },
      },
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

<style scoped>
.carousel-wrapper {
  padding: 40px;
  height: 150px;
}
.img-warpper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
.slick-next:before,
.slick-prev:before {
  color: black;
}
</style>
