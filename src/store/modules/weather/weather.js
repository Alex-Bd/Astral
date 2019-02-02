import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  threeDay:[
    {
    id:1,
    day: "Friday",
    temperature: 2,
    condition: "fas fa-cloud-moon"
    },
    {
      id:2,
      day: "Saturday",
      temperature: 3,
      condition: "fas fa-cloud-sun"
    },
    {
      id:3,
      day: "Sunday",
      temperature: 1,
      condition: "fas fa-moon"
    }
  ],
  weekly: []

}

export default {
  state,
  getters,
  actions,
  mutations
}
