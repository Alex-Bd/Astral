import types from './../../../types'

const mutations={
  [types.todo.addDailyTask]: (state,payload) => {
    state.dailyTasks.push(payload)
  },
  [types.todo.changeStatus]: (state,payload) => {
    state.dailyTasks.find(obj => {
      if(obj.id === payload.id){
        obj.state = true
      }
    })
  }

}
export default mutations

