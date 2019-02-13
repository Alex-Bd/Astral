import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  play: false,
  progress: 0,
  progressMax:0,
  volume:50,
  loop:false,
  random:false
};

export default {
  state,
  getters,
  actions,
  mutations
}
