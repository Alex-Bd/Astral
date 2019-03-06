import types from "./../../../types";

const actions = {
  [types.music.folders.modifyBreadcrumbs]: ({ commit }, payload) => {
    commit(types.music.folders.setBreadcrumbs, payload);
  }
};
export default actions;
