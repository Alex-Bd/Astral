import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  city:"Nyiregyhaza",

  today:{
    one:{
      time:"",
      temp:0,
      cond:"",
      wind:"",
      description:""
  },two:{
      time:"",
      temp:0,
      cond:"",
      wind:"",
      description:""
  },three:{
      time:"",
      temp:0,
      cond:"",
      wind:"",
      description:""
  }},
  weekly: []

};

export default {
  state,
  getters,
  actions,
  mutations
}
