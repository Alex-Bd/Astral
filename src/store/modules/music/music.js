import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  music: [],
  currentAlbum: [],
  currentSong: {
    title: "",
    artist: "",
    album: "",
    src: "",
    pic: ""
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
