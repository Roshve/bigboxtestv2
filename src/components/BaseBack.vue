<template>
  <button
    @click="click"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded w-16"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseBack",

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
