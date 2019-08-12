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
    },
    [MUTATIONS.DELETE_MULTIPLE_MULTIPLE]: function(state, payload) {
      let a = new Set([...state.toDoList]);
      let b = new Set([...payload]);
      let difference = new Set([...a].filter(x => !b.has(x.id)));
      state.toDoList = [...difference];
      state.selectedIds = [];
    },
    [MUTATIONS.EDIT_TODO_MUTATION]: function(state, payload) {
      const index = state.toDoList.findIndex(elem => elem.id === payload.id);
      const selectedIdIndex = state.selectedIds.indexOf(payload.id);

      state.toDoList.splice(index, 1);
      state.toDoList.splice(index, 0, payload);
      state.selectedIds.splice(selectedIdIndex, 1);
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
    },
    [ACTIONS.DELETE_MULTIPLE]: function({ commit }, payload) {
      commit(MUTATIONS.DELETE_MULTIPLE_MULTIPLE, payload);
    },
    [ACTIONS.EDIT_TODO]: function({ commit }, payload) {
      commit(MUTATIONS.EDIT_TODO_MUTATION, payload);
    }
  }
});
