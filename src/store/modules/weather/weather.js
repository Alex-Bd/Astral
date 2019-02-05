import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  city:"Nyiregyhaza",

  today:{
    one:{
      time:"",
      temp:"",
      cond:"",
      wind:""
  },two:{
      time:"",
      temp:"",
      cond:"",
      wind:""
  },three:{
      time:"",
      temp:"",
      cond:"",
      wind:""
  }},
  weekly: []

}

export default {
  state,
  getters,
  actions,
  mutations
}
