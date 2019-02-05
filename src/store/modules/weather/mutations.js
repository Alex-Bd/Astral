import types from "./../../types"
import moment from 'moment'

const mutations= {
 [types.weather.setDailyWeather]: (state,payload) => {
   console.log("called")
    let now = moment()


    state.today.one.time=now.hour()+":00";
    now.add(3,'h')
    state.today.two.time=now.hour()+":00";
   now.add(3,'h')
    state.today.three.time=now.hour()+":00";



 }
}

export default mutations

