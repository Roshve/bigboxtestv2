import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import VueSplide from "@splidejs/vue-splide";
import vuetify from "./plugins/vuetify";

Vue.use(VueSplide);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
