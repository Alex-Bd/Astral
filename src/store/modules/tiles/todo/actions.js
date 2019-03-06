import types from "./../../../types";

const actions = {
  [types.todo.queryDailyTasks]: ({ commit }) => {
    let ph = [
      { id: 1, name: "Saw Palmeto", state: true },
      { id: 2, name: "Multivitamin", state: false },
      { id: 3, name: "Vitamin C", state: false },
      { id: 4, name: "Saw Palmeto", state: true },
      { id: 5, name: "Multivitamin", state: false },
      { id: 6, name: "Vitamin C", state: false },
      { id: 7, name: "Saw Palmeto", state: true },
      { id: 8, name: "Multivitamin", state: false },
      { id: 9, name: "Vitamin C", state: false },
      { id: 10, name: "Saw Palmeto", state: true },
      { id: 11, name: "Multivitamin", state: false },
      { id: 12, name: "Vitamin C", state: false }
    ];
    ph.forEach(p => {
      commit(types.todo.addDailyTask, p);
    });
  },
  [types.todo.crossout]: ({ commit }, item) => {
    commit(types.todo.changeStatus, item);
  }
};

export default actions;
