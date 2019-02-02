import types from "./../../types"

const getters = {
  [types.weather.getDailyWeather]: state => {
    return state.threeDay
  }

}

export default getters
