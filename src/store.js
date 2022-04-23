import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activities: [],
    link: "",
  },

  mutations: {
    SET_ACTIVITIES(state, activities) {
      state.activities = activities;
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
