import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  city:"Nyiregyhaza",

  today:{now:{},forecast:[]},
  weekly: []

};

export default {
  state,
  getters,
  actions,
  mutations
}
