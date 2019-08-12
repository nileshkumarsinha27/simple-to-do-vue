import Vue from "vue";
import Vuex from "vuex";
import ACTIONS from "@/actions.js";
import MUTATIONS from "@/mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDoList: [],
    selectedIds: []
  },
  getters: {
    toDoList: state => state.toDoList,
    selectedIds: state => state.selectedIds
  },
  mutations: {
    [MUTATIONS.ADD_TO_DO_MUTATION]: function(state, payload) {
      state.toDoList = [...state.toDoList, payload];
    },
    [MUTATIONS.MODIFY_SELECTED_MUTATION]: function(state, payload) {
      const index = state.selectedIds.indexOf(payload);
      if (index !== -1) {
        state.selectedIds.splice(index, 1);
      } else {
        state.selectedIds.push(payload);
      }
    },
    [MUTATIONS.DELETE_TO_DO_MUTATION]: function(state, payload) {
      const listIndex = state.toDoList.findIndex(elem => elem.id === payload);
      const selectedIndex = state.selectedIds.findIndex(
        elem => elem === payload
      );
      state.toDoList.splice(listIndex, 1);
      state.selectedIds.splice(selectedIndex, 1);
    }
  },
  actions: {
    [ACTIONS.ADD_TO_DO]: function({ commit }, payload) {
      commit(MUTATIONS.ADD_TO_DO_MUTATION, payload);
    },
    [ACTIONS.MODIFY_SELECTED]: function({ commit }, payload) {
      commit(MUTATIONS.MODIFY_SELECTED_MUTATION, payload);
    },
    [ACTIONS.DELETE_TO_DO]: function({ commit }, payload) {
      commit(MUTATIONS.DELETE_TO_DO_MUTATION, payload);
    }
  }
});
