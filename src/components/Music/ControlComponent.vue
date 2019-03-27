<template>
  <div class="row items-center">
    <q-img
      class="image"
      src="https://cdn.quasar-framework.org/img/mountains.jpg"
      :ratio="1"
    ></q-img>
    <div class="column song-title text-center">
      <div class="col">song name</div>
      <div class="col">artist</div>
    </div>

    <div class="row text-center items-center buttons">
      <div class="col">
        <q-icon
          name="fas fa-step-backward"
          color="white"
          class="control-icons"
        ></q-icon>
      </div>
      <div class="col">
        <q-icon name="fas fa-play" color="white" class="play-icon"></q-icon>
      </div>
      <div class="col">
        <q-icon
          name="fas fa-step-forward"
          color="white"
          class="control-icons"
        ></q-icon>
      </div>
    </div>
    <div class="row progress-bar">
      <div class="col-2 text-center">00:00</div>
      <div class="col current-time">
        <q-Slider
          dense
          v-model="songProgress"
          :min="0"
          :max="100"
          :step="1"
        ></q-Slider>
      </div>
      <div class="col-2 text-center">05:00</div>
    </div>
    <div class="row volume">
      <div class="col-2">
        <q-icon name="fas fa-volume-up" color="white"></q-icon>
      </div>
      <div class="col-10">
        <q-Slider
          dense
          v-model="volume"
          :min="0"
          :max="100"
          :step="1"
        ></q-Slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlComponent",
  data() {
    return {
      songProgress: 0,
      volume: 0
    };
  }
};
</script>

<style scoped lang="stylus">
@import "./../../css/Music/Music.styl"

.image
  margin-left 1%
  width 4.5%
  height 4.5%

.song-title
  width 20.5%

.buttons
  width 15%

.progress-bar
  width 47%

.volume
  width 10%
  margin-right 1%


</style>
