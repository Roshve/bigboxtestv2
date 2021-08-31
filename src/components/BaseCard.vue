<template>
  <div class="container font-nuni">
    <div class="grid grid-cols-3 gap-x-5 gap-y-6">
      
      <div v-for="a in activities" :key="a.id" class="container">

        <div class="container">
          <img class="rounded-sm" src="../assets/mokup_img.jpg" alt="" />
        </div>
        <div class="flex justify-between my-3">
          <h1 class="font-bold">{{ a.title }}</h1>
          <img src="../assets/person_outline_black_24dp.svg" alt="" />
        </div>
        <div class="container my-2">
          <img src="" alt="" />
          <p class="text-left text-sm">{{ JSON.parse(a.activity).locations[0].province }}</p>
        </div>
        <div class="container">
          <p class="text-left">
            {{ JSON.parse(a.activity).description }}
          </p>
        </div>
        <div class="container my-2">
          <p class="text-lg font-mediun text-left">{{ a.points }} puntos</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    activities: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
