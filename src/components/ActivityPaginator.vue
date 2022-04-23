<template>
  <section class="text-center flex justify-center items-center">
    <img class="icon-arrows" src="@/assets/icons/ArrowLeft.svg" />
    <span class="icon-arrows">1</span>
    <span class="icon-arrows">1</span>
    <span class="icon-arrows">1</span>
    <span class="icon-arrows">1</span>
    <span class="icon-arrows">1</span>
    <img class="icon-arrows" src="@/assets/icons/ArrowRight.svg" />
  </section>
</template>

<script>
export default {
  name: "ActivityPaginator",

  props: {
    link: {
      type: Object,
      default: () => {},
    },
  },

  created() {
    console.log(this.link);
  },
  updated() {
    console.log(this.link);
  },

  computed: {},
};
</script>
<style scoped>
.icon-arrows {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 34px;
  padding: 8px;
  background: #ff6c5e;
  border-radius: 50%;
}
</style>
