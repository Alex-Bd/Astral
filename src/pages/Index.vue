<template>
  <div class="row">
    <div class="col-5">
      <div class="row">
        <div class="col">
          <Weather></Weather>
        </div>
      </div>
      <div class="row">
        <div align="center" class="col">
          <Music></Music>
        </div>
      </div>
    </div>

    <div class="col-2">
      <div class="row">
        <div class="col">
          <Time></Time>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Todo></Todo>
        </div>
      </div>
    </div>
    <div class="col-5">
      <div class="row">
        <div class="col">
          <Mail></Mail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "./../components/Home/WeatherTile";
import Time from "./../components/Home/TimeTile";
import Music from "./../components/Home/MusicTile";
import Todo from "./../components/Home/TodoTile";

export default {
  name: "PageIndex",
  components: {
    Time,
    Music,
    Weather,
    Todo
  }
};
</script>

<style scoped></style>
