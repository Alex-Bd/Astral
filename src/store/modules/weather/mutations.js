import types from "./../../types"
import moment from 'moment'
import {codeConverter} from "./WeatherCodes"

const mutations= {
 [types.weather.setCurrentWeather]: (state,payload) => {
    let now = moment();
    state.today.now.time=now.hour()+":00";
    state.today.now.temp=Math.round(payload.main.temp);
    state.today.now.cond=codeConverter(payload.weather[0].icon);
    state.today.now.wind= Math.trunc(payload.wind.speed*3.6);
    state.today.now.description=payload.weather[0].description;
    state.today.now.humidity=payload.main.humidity;
    state.today.now.clouds=payload.clouds.all+"%";
 },

[types.weather.setForecastWeather]: (state,payload) => {
  let now = moment();
  state.today.forecast=[]
  for (let i = 0; i < payload.length; ++i) {
    now.add("3", "h");
    state.today.forecast.push({
      id:i,
      time : now.hour() + ":00",
      temp: Math.round(payload[i].main.temp),
      cond : codeConverter(payload[i].weather[0].icon),
      wind : Math.trunc(payload[i].wind.speed * 3.6),
      description : payload[i].weather[0].description,
      humidity: payload[i].main.humidity,
      clouds: payload[i].clouds.all + "%"
    });
}

 },
};

export default mutations

