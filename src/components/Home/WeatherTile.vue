<!--suppress JSUnusedAssignment -->
<template>
  <div class="">
    <div
      class="size background"
      ref="weatherTileScroll"
      v-on:wheel="horizontalScrolling"
    >
      <div class="row items-center scroll">
        <div
          v-for="weather in weather"
          :key="weather.id"
          :style="temperatureColor(weather.temp)"
        >
          <div class="col day-slot">
            <div class="row">
              <div class="col">
                <div>{{ weather.time }}</div>
              </div>
            </div>

            <div class="row items-center">
              <div class="col">
                <q-icon :name="weather.cond" class="cond-icon"></q-icon>
                <span class="temp"
                  >{{ weather.temp }} <span>&#8451;</span>
                </span>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div>{{ weather.description }}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div>
                  <q-icon name="fas fa-wind" class="status-icon"></q-icon>
                  {{ weather.wind }}
                </div>
              </div>
              <div class="col">
                <q-icon name="fas fa-tint" class="status-icon"></q-icon>
                {{ weather.humidity }}
              </div>
              <div class="col">
                <q-icon name="fas fa-cloud" class="status-icon"></q-icon>
                {{ weather.clouds }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import types from "./../../store/types";

export default {
  name: "WeatherTile",

  computed: {
    ...mapState({
      city: state => state.weatherStore.city,
      weather: state => state.weatherStore.forecast
    })
  },
  methods: {
    horizontalScrolling: function(event) {
      if (event.deltaY > 0) this.$refs.weatherTileScroll.scrollLeft += 50;
      else this.$refs.weatherTileScroll.scrollLeft -= 50;
    },
    temperatureColor: function(temperature) {
      //Polynomial interpolation
      let amount = 0;
      if (temperature > 40) amount = 19;
      else if (temperature > 20) amount = 140 - 3 * temperature;
      else if (temperature > 10) amount = 240 - 8 * temperature;
      else if (temperature > -10) amount = 190 - 3 * temperature;
      else if (temperature > -20) amount = 200 - 2 * temperature;
      else amount = 240;

      return "color: hsl(" + amount + ", 100%, 60%);";
    }
  },
  mounted() {
    this.$store.dispatch(types.weather.updateDailyWeather, this.city);
  }
};
</script>

<style scoped lang="stylus">
  @import "./../../css/Home/Weather/WeatherVariables.styl"
  @import "./../../css/Home/Home.styl"

.size
  width: $width em
  height: $height em
  overflow-y: auto
  overflow-x: hidden

.cond-icon
  font-size $width*0.1 em

.status-icon
  font-size $width*0.035 em

.day-slot
  width: $width * (1 / 3) em
  text-align: center

.scroll
  width: $width * (1 / 3) * 41 em
  height: $height

.temp
  margin-left: 10px;

</style>
