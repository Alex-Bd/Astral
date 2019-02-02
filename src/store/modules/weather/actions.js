import types from "./../../types"
import axios from 'axios'

const actions={
  [types.weather.updateDailyWeather]: ({commit}) => {
    axios.get(types.domain+"/music")

  }
}

export default actions
