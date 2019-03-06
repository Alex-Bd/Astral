import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  city: "Nyiregyhaza",
  forecast: []
};

export default {
  state,
  getters,
  actions,
  mutations
};
