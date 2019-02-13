import types from "./../../types"

const mutations= {
 [types.music.setMusicList]: (state,payload) =>{
   state.music = []
   payload.forEach( obj => {
      state.music.push(obj.artists)
     })
  },
  [types.music.setSong]: (state,payload) => {
    state.currentSong.title = payload.name
    state.currentSong.src= "http://localhost:3000/Music/"+payload.path.replace("\\","/")
  },
  [types.music.setCurrentAlbum]: (state,payload) => {
  }
}

export default mutations

