import types from "./../../../types";

const mutations = {
  [types.music.player.setPlay]: (state, payload) => {
    state.play = payload.action;
    state.playButton = payload.button;
  },
  [types.music.player.setDuration]: (state, payload) => {
    state.duration = payload;
  },
  [types.music.player.setCurrentAlbum]: (state, payload) => {
    state.currentAlbum = Object.values(
      payload.flatMap(value => {
        return {
          name: value.name,
          duration: value.id,
          artist: value.path,
          album: value.path
        };
      })
    );
  },
  [types.music.player.setLoop]: (state, payload) => {
    state.loop = payload;
  },
  [types.music.player.setRandom]: (state, payload) => {
    state.random = payload;
  },
  [types.music.player.setVolume]: (state, payload) => {
    state.volume = payload;
  }
};

export default mutations;
