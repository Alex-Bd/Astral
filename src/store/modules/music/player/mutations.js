import types from "./../../../types"

const mutations= {

  [types.music.player.setPlay]: (state,payload) => {
    state.play=payload
  },
  [types.music.player.setDuration]: (state,payload) => {
    state.duration=payload
  },
  [types.music.player.setCurrentAlbum]: (state,payload) => {
    state.currentAlbum=Object.values(payload.flatMap(value => {
      return {
        name: value.name,
        duration: value.id,
        artist:value.path,
        album: value.path
      }
    }))
  },

}

export default mutations
