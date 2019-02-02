import types from './../../../types'

const getters = {
  [types.time.getDate]: state => {
    return state.date;
  },
  [types.time.getTime]: state => {
    return state.time;
  }
}

export default getters
