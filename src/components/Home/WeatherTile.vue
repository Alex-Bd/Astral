<template>
  <div class="doc-container">
<div class="slot" ref="scroll" v-on:wheel="horiontalScrolling">
    <div  class="row items-center scroll ">
        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
              </div>
          </div>
        </div>

        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
              </div>
          </div>
        </div>

        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
              </div>
          </div>
        </div>

        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
              </div>
          </div>
        </div>

        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
              </div>
          </div>
        </div>

        <div class="col-4 day-slot">
          <div class="row">
            <div class="col">
              <div align="center">{{today.one.time}}</div>
            </div>
          </div>

          <div class="row">
            <div align="center" class="col">
              <q-icon :name="today.one.cond"  color="white" size="8vh"></q-icon>
              <span class="temp">{{today.one.temp}}<q-icon name= "fas fa-temperature-low" color="white" size="3vh"></q-icon></span>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">{{today.one.description}}</div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div align="center">
                <q-icon name="fas fa-wind"  color="white" size="3vh"></q-icon>
                {{today.one.wind}}
              </div>
            </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint"  color="white" size="3vh"></q-icon>
                {{today.one.humidity}}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud"  color="white" size="3vh"></q-icon>
                {{today.one.clouds}}
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
          today: state => state.weatherStore.today
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
    overflow: auto;
  }
  .day-slot{
    width: calc(40vw* (1/3));
    text-align: center;
  }
.scroll{
  width: 100vw;
}
</style>
