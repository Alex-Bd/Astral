import types from "./../../types"
import moment from 'moment'
import {codeConverter} from "./WeatherCodes"

const mutations= {
 [types.weather.setCurrentWeather]: (state,payload) => {
    let now = moment();
    state.today.one.time=now.hour()+":00";
    state.today.one.temp=Math.round(payload.main.temp);
    state.today.one.cond=codeConverter(payload.weather[0].icon);
    state.today.one.wind= Math.trunc(payload.wind.speed*3.6);
    state.today.one.description=payload.weather[0].description;
    state.today.one.humidity=payload.main.humidity;

 },
[types.weather.setForecastWeather]: (state,payload) => {
    let now = moment();
    now.add("3","h");
    state.today.two.time=now.hour()+":00";
    state.today.two.temp=Math.round(payload[0].main.temp);
    state.today.two.cond=codeConverter(payload[0].weather[0].icon);
    state.today.two.wind=Math.trunc(payload[0].wind.speed*3.6);
    state.today.two.description=payload[0].weather[0].description;
    state.today.two.humidity=payload[0].main.humidity;

    now.add("3","h");
    state.today.three.time=now.hour()+":00";
    state.today.three.temp=Math.round(payload[1].main.temp);
    state.today.three.cond=codeConverter(payload[1].weather[0].icon);
    state.today.three.wind=Math.trunc(payload[0].wind.speed*3.6);
    state.today.three.description=payload[1].weather[0].description
    state.today.three.humidity=payload[1].main.humidity;
 },
};

export default mutations

