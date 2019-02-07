import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  city:"Nyiregyhaza",

  forecast:[],
  weekly: []

};

export default {
  state,
  getters,
  actions,
  mutations
}
