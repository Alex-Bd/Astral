import types from "./../../types";

const mutations = {
  [types.music.setMusicList]: (state, payload) => {
    state.music = [];
    payload.forEach(obj => {
      state.music.push(obj.artists);
    });
  },
  [types.music.setSong]: (state, payload) => {
    console.log(payload);
    state.currentSong.title = payload.song.name;
    state.currentSong.album = payload.album;
    state.currentSong.artist = payload.artist;
    state.currentSong.src =
      "http://localhost:3000/Music/" + payload.song.path.replace("\\", "/");
  },
  [types.music.setCurrentAlbum]: (state, payload) => {
    state.currentAlbum = payload;
  }
};

export default mutations;
