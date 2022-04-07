import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activities: {},
  },

  mutations: {
    SET_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
  },

  actions: {
    getActivities({ commit }) {
      axios
        .get("https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9")
        .then((response) => {
          commit("SET_ACTIVITIES", response.data);
        });
    },
  },
});

export default store;
