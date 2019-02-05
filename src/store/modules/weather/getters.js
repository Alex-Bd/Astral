import types from "./../../types"

const getters = {
  [types.weather.getDailyWeather]: state => {
    return state.today
  }
};

export default getters
