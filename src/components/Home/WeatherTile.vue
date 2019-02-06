<template>
  <div class="doc-container">
<div class="slot" ref="scroll" v-on:wheel="horiontalScrolling">
    <div  class="row items-center scroll">

        <div class="col day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{weather.now.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="weather.now.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{weather.now.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{weather.now.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{weather.now.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{weather.now.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{weather.now.clouds}}
              </div>
          </div>
        </div>

      <div v-for="weather in weather.forecast" :key="weather.id">

       <div class="col day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{weather.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="weather.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{weather.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
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
  import { mapState } from 'vuex'
  import types from './../../store/types'


    export default {
      name: "WeatherTile",

      computed: {
        ...mapState({
          city: state => state.weatherStore.city,
          weather: state => state.weatherStore.today
        }),
      },
      methods:{
        horiontalScrolling: function (event) {
          if(event.deltaY > 0)
            this.$refs.scroll.scrollLeft+=15
          else
            this.$refs.scroll.scrollLeft-=15
        }

      },
     mounted() {
       this.$store.dispatch(types.weather.updateDailyWeather,this.city)
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

}

</style>
