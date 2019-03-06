import types from "./../../../types";

const getters = {
  [types.todo.getDailyTasks]: state => {
    return state.dailyTasks;
  }
};

export default getters;
