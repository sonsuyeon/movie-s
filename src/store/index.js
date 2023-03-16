import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 4가지
export const store = new Vuex.Store({
  state() {
    return {
      number: 0,
    };
  },
  getters: {
    getNumberPlusTen(state) {
      return state.number + 10;
    },
  },
  mutations: {
    SET_CHANGE_NUMBER(state, data) {
      state.number = data;
    },
  },
  actions: {
    // api 통신
    // api 통신 응답 받은 값을 state 저장해야 할 때
    // 또는 응답 받은 값을 다시 컴포넌트로 되돌려줄 때
    // context -> state, getters, commit, actions, rootState, rootGetters
    getApiNumber({ state, commit }) {
      console.log(state);
      commit("SET_CHANGE_NUMBER", 500);
    },
  },
});
