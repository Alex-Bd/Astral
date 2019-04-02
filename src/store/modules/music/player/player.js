import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  play: false,
  playButton: "fas fa-play",
  progress: 0,
  progressMax: 0, //duration
  volume: 1,
  loop: false,
  random: false
};

export default {
  state,
  getters,
  actions,
  mutations
};
