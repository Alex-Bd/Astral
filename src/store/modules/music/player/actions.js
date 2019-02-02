import types from "./../../../types"

const actions= {
  [types.music.player.start]: ({commit}) =>{
    console.log("play")
    commit(types.music.player.setPlay,"play")
  },
  [types.music.player.stop]: ({commit}) =>{
    console.log("stop")
    commit(types.music.player.setPlay,"pause")
  },
  [types.music.player.changeCurrentAlbum]: ({commit,getters}, payload) =>{
    commit(types.music.player.setCurrentAlbum,getters["music/getSongsOfAlbum"](payload.artist,payload.album))
},



}
export default actions
