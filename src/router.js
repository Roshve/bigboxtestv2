import Vue from "vue";
import Router from "vue-router";
import AllActivities from "@/views/AllActivities";

//Incorpora el plugin
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/actividades",
    },
    {
      path: "/actividades",
      name: "AllActivities",
      component: AllActivities,
    },
  ],
});
