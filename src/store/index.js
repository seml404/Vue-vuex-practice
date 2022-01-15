import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 5,
    };
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(state, getters) {
      return getters.counter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    addNumber(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    incrementAsync(ctx) {
      setTimeout(() => {
        ctx.commit("increment");
      }, 2000);
    },
  },
});

export default store;
