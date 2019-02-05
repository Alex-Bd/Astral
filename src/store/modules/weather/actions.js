import types from "./../../types"
import axios from "axios"

const actions={
  [types.weather.updateDailyWeather]: ({commit},payload) => {

    axios.get("http://localhost:8070/Forecast?city="+payload).then(function (response) {
      commit(types.weather.setDailyWeather,response)
      console.log(response)
    })



  },


}

export default actions
