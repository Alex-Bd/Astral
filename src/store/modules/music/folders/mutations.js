import types from "./../../../types";

const mutations = {
  [types.music.folders.setBreadcrumbs]: (state, payload) => {
    let item = { name: payload.name, id: payload.name };

    if (payload.add) state.breadcrumbs.push(item);
    else {
      state.breadcrumbs = [];
      state.breadcrumbs.push(item);
    }
  }
};

export default mutations;
