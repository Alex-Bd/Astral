import types from "./../../../types";

const getters = {
  [types.music.folders.getBreadcrumbs]: state => {
    return state.breadcrumbs;
  }
};

export default getters;
