import types from "./../../types"
import moment from 'moment'
import {codeConverter} from "./WeatherCodes"

const mutations= {
  [types.weather.setCurrentWeather]: (state,payload) => {
    let now = moment();
    state.forecast=[];
    state.forecast.push({
      id:0,
      time : dayToString(now.isoWeekday()) + " " + now.hour() + ":00",
      temp : Math.round(payload.main.temp),
      cond : codeConverter(payload.weather[0].icon),
      wind : Math.trunc(payload.wind.speed * 3.6),
      description : payload.weather[0].description,
      humidity : payload.main.humidity,
      clouds : payload.clouds.all + "%"
    });
  },

  [types.weather.setForecastWeather]: (state,payload) => {
    let now = moment();
    state.forecast=state.forecast.slice(0,1);

    for (let i = 0; i < payload.length; ++i) {
      now.add("3", "h");
      state.forecast.push({
        id:i+1,
        time : dayToString(now.isoWeekday())+" "+ now.hour() + ":00",
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

let dayToString= function f(day) {
  let dayString="";
  switch (day) {
    case 1:
      dayString="Monday";
      break;
    case 2:
      dayString="Tuesday";
      break;
    case 3:
      dayString="Wednesday";
      break;
    case 4:
      dayString="Thursday";
      break;
    case 5:
      dayString="Friday";
      break;
    case 6:
      dayString="Saturday";
      break;
    case 7:
      dayString="Sunday";
      break;
  }
  return dayString;
};
