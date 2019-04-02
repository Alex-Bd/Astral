import types from "./../../../types";

const actions = {
  [types.music.player.togglePlay]: ({ commit, getters }) => {
    if (getters["player/getPlay"])
      commit(types.music.player.setPlay, {
        action: "play",
        button: "fas fa-pause"
      });
    else
      commit(types.music.player.setPlay, {
        action: "pause",
        button: "fas fa-play"
      });
  },
  [types.music.player.changeProgress]: ({ commit }, payload) => {
    commit(types.music.player.setProgress, payload);
  }
  ,
  [types.music.player.toggleRandom]: ({ commit }, payload) => {
    commit(types.music.player.setRandom, payload);
  },
  [types.music.player.toggleLoop]: ({ commit }, payload) => {
    commit(types.music.player.setLoop, payload);
  },
  [types.music.player.changeVolume]: ({ commit }, payload) => {
    commit(types.music.player.setVolume, payload);
  },
  [types.music.player.changeCurrentAlbum]: ({ commit, getters }, payload) => {
    commit(
      types.music.player.setCurrentAlbum,
      getters["music/getSongsOfAlbum"](payload.artist, payload.album)
    );
  }
};
export default actions;
