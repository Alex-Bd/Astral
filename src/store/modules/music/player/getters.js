import types from "./../../../types"

const getters = {
  [types.music.player.getPlay]: state => {
    console.log(state.play)
    return state.play
  },
  [types.music.player.getProgress]: state =>{
    return state.progress
  },
  [types.music.player.getCurrentAlbum]: state => {
    return state.currentAlbum
  }

}

export default getters
