import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  music : [],
  currentAlbum:[

  ],
  currentSong:{
    title: '',
    artist: '',
    src: '',
    pic: ''
  }


}

export default {
  state,
  getters,
  actions,
  mutations
}
