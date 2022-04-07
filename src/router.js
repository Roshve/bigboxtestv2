import Vue from "vue";
import Router from "vue-router";
import ViewHome from "@/views/ViewHome";
import WhatIncludes from "@/views/WhatIncludes";

//Incorpora el plugin
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "*",
      redirect: "/actividades",
    },
    {
      path: "/",
      redirect: "/actividades",
    },
    {
      path: "/actividades",
      name: "all-activities",
      component: ViewHome,
    },
    {
      path: "/actividad/:id",
      name: "what-includes",
      component: WhatIncludes,
    },
  ],
});
