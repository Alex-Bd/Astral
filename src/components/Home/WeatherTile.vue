<!--suppress JSUnusedAssignment -->
<template>
  <div class="">
    <div class="size background" ref="weatherTileScroll" v-on:wheel="horizontalScrolling">
      <div class="row items-center scroll">
        <div
          v-for="weather in weather"
          :key="weather.id"
          :style="temperatureColor(weather.temp)"
        >
          <div class="col day-slot">
            <div class="row">
              <div class="col">
                <div align="center">{{ weather.time }}</div>
              </div>
            </div>

            <div class="row items-center">
              <div align="center" class="col">
                <q-icon :name="weather.cond" size="8vh"></q-icon>
                <span class="temp"
                  >{{ weather.temp }} <span>&#8451;</span>
                </span>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div align="center">{{ weather.description }}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div align="center">
                  <q-icon name="fas fa-wind" size="3vh"></q-icon>
                  {{ weather.wind }}
                </div>
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-tint" size="3vh"></q-icon>
                {{ weather.humidity }}
              </div>
              <div align="center" class="col">
                <q-icon name="fas fa-cloud" size="3vh"></q-icon>
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
  @import "./../../css/Home/Home.styl"
.size {
  width: 38em;
  height: 9em;
  overflow-y: auto;
  overflow-x: hidden;
}

.day-slot {
  width: calc(38em * (1 / 3));
  text-align: center;
}
.scroll {
  width: calc((38em * (1 / 3)) * 41);
  height: 9em;
}
.temp {
  margin-left: 10px;
}
</style>
