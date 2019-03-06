import types from "./../../../types";

let timer;
const actions = {
  [types.time.timeRefresh]: ({ commit }) => {
    timer = setInterval(() => {
      commit(types.time.updateDateTime);
    }, 500);
  },
  [types.time.clearDateInterval]: () => {
    clearInterval(timer);
  }
};

export default actions;
