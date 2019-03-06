import types from "./../../types";

const actions = {
  [types.music.loadMusicList]: ({ commit }) => {
    console.log("loaded");
    let call = [types.domain] + "/music/getMusic";

    fetch(call, { mode: "cors", method: "Get" })
      .then(function(response) {
        return response.json();
      })
      .then(function(list) {
        commit(types.music.setMusicList, list);
      });
  },
  [types.music.loadMusic]: ({ commit, dispatch }, payload) => {
    commit(types.music.setCurrentAlbum, payload.artist);

    let call = [types.domain] + "/music/getSong/" + payload.artist;

    fetch(call, { mode: "cors", method: "Get" })
      .then(function(response) {
        return response.json();
      })
      .then(function(song) {
        commit(types.music.setSong, {
          song: song,
          album: payload.artist.split("\\")[0],
          artist: payload.artist.split("\\")[1]
        });
      })
      .then(function() {
        dispatch(types.music.player.start);
      });
  }
};
export default actions;
