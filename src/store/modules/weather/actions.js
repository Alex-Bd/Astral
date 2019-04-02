import types from "./../../types";
import axios from "axios";

const actions = {
  [types.weather.updateDailyWeather]: ({ commit }, payload) => {
    axios
      .get(types.domain+"/Weather?city=" + payload)
      .then(function(response) {
        commit(types.weather.setCurrentWeather, response.data);
      });

    axios
      .get(types.domain+"/Forecast?city=" + payload)
      .then(function(response) {
        commit(types.weather.setForecastWeather, response.data.list);
      });
  }
};

export default actions;
