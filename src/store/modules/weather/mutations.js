import types from "./../../types"
import moment from 'moment'
import {codeConverter} from "./WeatherCodes"

const mutations= {
 [types.weather.setCurrentWeather]: (state,payload) => {
   console.log("called")
    let now = moment()
    state.today.one.time=now.hour()+":00";
    state.today.one.temp=payload.main.temp
    state.today.one.cond=codeConverter(payload.weather[0].icon)
    state.today.one.wind=payload.wind.speed
    state.today.one.description=payload.weather[0].description

 },
[types.weather.setForecastWeather]: (state,payload) => {
   console.log("called")
    let now = moment()
    now.add("3","h")
    state.today.two.time=now.hour()+":00";
    state.today.two.temp=payload[0].main.temp
    state.today.two.cond=codeConverter(payload[0].weather[0].icon)
    state.today.two.wind=payload[0].wind.speed
    state.today.two.description=payload[0].weather[0].description
    now.add("3","h")
    state.today.three.time=now.hour()+":00";
    state.today.three.temp=payload[1].main.temp
    state.today.three.cond=codeConverter(payload[1].weather[0].icon)
    state.today.three.wind=payload[0].wind.speed
    state.today.three.description=payload[1].weather[0].description
 },


}

export default mutations

