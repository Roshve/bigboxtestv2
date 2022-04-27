import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activities: [],
    link: "",
  },
  /* for (let index = 0; index < state.activities.length; index++) {
    state.activities[index].activity = JSON.parse(
      state.activities[index].activity
    ); */

  /*   getters: {
    parseActivity(state) {
      let parse = [...state.activities];
      let parse2 = [...state.activities];
      let hola = [];
      parse.map((item) => {
        hola.push(JSON.parse(item.activity));
      });
      for (let index = 0; index < parse.length; index++) {
        parse2[index].activity = hola[index];
      }
      return parse2;
    },
  }, */

  mutations: {
    SET_ACTIVITIES(state, activities) {
      Vue.set(state, "activities", [...activities]);
    },
    SET_LINK(state, link) {
      state.link = link;
    },
  },

  actions: {
    getActivities({ commit }) {
      axios
        .get("https://json-biglifeapp.herokuapp.com/activity?_page=4&_limit=9")
        .then((response) => {
          commit("SET_ACTIVITIES", response.data);
          commit("SET_LINK", response.headers.link);
        });
    },
  },
});

export default store;
