import types from "./../../types";

const getters = {
  [types.music.getMusic]: state => {
    return state.music;
  },
  [types.music.getCurrentSong]: state => {
    return state.currentSong;
  },
  [types.music.getAlbum]: state => artist => {
    return Object.values(
      state.music.filter(obj => {
        return obj.name == artist;
      })[0].albums
    ).flatMap(value => value.name);
  },
  [types.music.getSongsOfAlbum]: state => (artist, album) => {
    return Object.values(
      Object.values(
        state.music.filter(obj => {
          return obj.name == artist;
        })[0].albums
      )
        .flatMap(value => value)
        .filter(obj => {
          return obj.name == album;
        })[0].songs
    ).flatMap(value => value);
  }
};

export default getters;
