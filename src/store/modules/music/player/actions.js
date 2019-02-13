import types from "./../../../types"

const actions= {
  [types.music.player.start]: ({commit}) =>{
    commit(types.music.player.setPlay,{action:"play",button:"fas fa-pause"})
  },
  [types.music.player.stop]: ({commit}) =>{
    commit(types.music.player.setPlay,{action:"pause",button:"fas fa-play"})
  },

  [types.music.player.toggleRandom]: ({commit},payload) =>{
    commit(types.music.player.setRandom,payload)
  },
 [types.music.player.toggleLoop]: ({commit},payload) =>{
    commit(types.music.player.setLoop,payload)
  },
 [types.music.player.changeVolume]: ({commit},payload) =>{
    commit(types.music.player.setVolume,payload)
  },

  [types.music.player.changeCurrentAlbum]: ({commit,getters}, payload) =>{
    commit(types.music.player.setCurrentAlbum,getters["music/getSongsOfAlbum"](payload.artist,payload.album))
},



}
export default actions
