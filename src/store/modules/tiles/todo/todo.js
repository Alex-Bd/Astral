import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  tasks:[
    {
      id:1,
      task: "Todo-1",
      isDone: false
    },
    {
      id:2,
      task: "Todo-2",
      isDone: false
    },
    {
      id:3,
      task: "Todo-3",
      isDone: true
    }
  ]
}

export default {
  state,
  getters,
  mutations,
  actions
}

