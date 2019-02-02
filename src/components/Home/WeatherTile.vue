<template>
  <div  class="doc-container">
    <div class="row slot" >

      <div class="col day-slot" v-for="day in days" :id="day.id">

        <div class="row justify-center">
          <div class="col">
            <div class="">{{day.day}}</div>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col">
            <q-icon :name= "day.condition"  color="white" size="8vh"></q-icon>
            <span class="temp">{{day.temperature}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
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
          days: state => state.weatherStore.threeDay
        }),
      },
     mounted() {
        console.log(this.days)
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
