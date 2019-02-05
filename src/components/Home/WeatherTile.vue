<template>
  <div class="doc-container">
    <div class="row">

      <div class="col">
        <div class="row justify-center">
          <div class="col">
            <div>{{today.one.time}}</div>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col">
            <q-icon :name= "today.one.cond"  color="white" size="8vh"></q-icon>
            <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="row justify-center">
          <div class="col">
            <div>{{today.two.time}}</div>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col">
            <q-icon :name= "today.two.cond"  color="white" size="8vh"></q-icon>
            <span class="temp">{{today.two.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>
      </div>
<div class="col">
        <div class="row justify-center">
          <div class="col">
            <div>{{today.three.time}}</div>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col">
            <q-icon :name= "today.three.cond"  color="white" size="8vh"></q-icon>
            <span class="temp">{{today.three.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div>smtg</div>
          </div>
        </div>
      </div>

      </div>
      </div>
</template>

<script>
  import { mapState } from 'vuex'
  import types from './../../store/types'

    export default {
      name: "WeatherTile"
      ,
      computed: {
        ...mapState({
          city: state => state.weatherStore.city,
          today: state => state.weatherStore.today
        }),
      },
     mounted() {
       this.$store.dispatch(types.weather.updateDailyWeather,this.city)
        console.log(this.today)
      }
    }
</script>

<style scoped>
  .slot{
    width: 40vw;
    height: 20vh;
  }
  .day-slot{
    width: calc(40vw* (1/3));
    text-align: center
  }


</style>
