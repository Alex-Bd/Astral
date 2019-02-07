<template>
  <div class="doc-container">
    <div class="slot" ref="scroll" v-on:wheel="horizontalScrolling" >
      <div  class="row items-center scroll">
        <div v-for="weather in weather" :key="weather.id">

          <div class="col day-slot">

            <div class="row">
              <div class="col">
                <div align="center">{{weather.time}}</div>
              </div>
            </div>

            <div class="row items-center">
              <div align="center" class="col" :style="temperatureColor(weather.temp)">
                <q-icon  :name="weather.cond"  size="8vh"></q-icon>
                <span  class="temp">{{weather.temp}} <span>&#8451;</span> </span>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div align="center">{{weather.description}}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div align="center">
                  <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                  {{weather.wind}}
                </div>
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{weather.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{weather.clouds}}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import types from './../../store/types';


  export default {
    name: "WeatherTile",

    computed: {
      ...mapState({
        city: state => state.weatherStore.city,
        weather: state => state.weatherStore.forecast
      }),
    },
    methods:{
      horizontalScrolling: function (event) {
        if(event.deltaY > 0)
          this.$refs.scroll.scrollLeft+=50;
        else
          this.$refs.scroll.scrollLeft-=50;
      },
      temperatureColor: function (temperature) {
        let amount=0;
        if(temperature > 40)
          amount=19;
        else if(temperature > 20)
          amount=140-3*temperature;
        else if(temperature > 10)
          amount=240-8*temperature;
        else if(temperature > -10)
          amount=190-3*temperature;
        else if(temperature > -20)
          amount=200-2*temperature;
        else
          amount=240

        return "color: hsl("+amount+", 100%, 60%);";
      }

    },
    mounted() {
      this.$store.dispatch(types.weather.updateDailyWeather,this.city);
    }
  }
</script>

<style scoped>
  .slot{
    width: 40vw;
    height: 20vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .day-slot{
    width: calc(40vw* (1/3));
    text-align: center;
  }
  .scroll{
    width: calc( (40vw* (1/3))*41 );
    height: 20vh;
  }
  .temp{
    margin-left: 10px;
  }

</style>
