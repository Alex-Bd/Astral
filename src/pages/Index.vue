<template>
  <div>
    <div class="row">
      <div class="col">
        <Weather></Weather>
      </div>
    </div>

    <div class="row">
      <div class="col">
            <Music></Music>
          </div>
        </div>
      </div>
</template>

<script>
import Weather from "./../components/Home/WeatherTile";
import Music from "./../components/Home/MusicTile";

export default {
  name: "PageIndex",
  components: {
    Music,
    Weather
  }
};
</script>

<style scoped lang="stylus">
</style>
