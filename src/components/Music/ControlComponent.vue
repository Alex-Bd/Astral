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
      <div class="col" >
        <q-btn icon="fas fa-step-backward"></q-btn>
      </div>
      <div class="col">
        <q-btn @click="play" :icon="playButton" class="play-icon"></q-btn>
      </div>
      <div class="col">
        <q-btn
          icon="fas fa-step-forward"
          class="control-icons"
        ></q-btn>
      </div>
    </div>
    <div class="row progress-bar">
      <div class="col-2 text-center">00:00</div>
      <div class="col current-time">
        <q-Slider
          dense
          :value="songProgress"
          @input="changeProgress"
          @change="changeProgress"
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
          :value="volume"
          @input="changeVolume"
          @change="changeVolume"
          :min="0"
          :max="100"
          :step="1"
        ></q-Slider>
      </div>
    </div>
  </div>
</template>

<script>
import types from "./../../store/types"
import { mapState, mapMutations} from "vuex";

export default {
  name: "ControlComponent",
  computed: {
    ...mapState({
      playButton: state => state.musicStore.player.playButton,
      songProgress: state => state.musicStore.player.progress,
      volume: state => state.musicStore.player.volume,
      loop: state => state.musicStore.player.loop,
      random: state => state.musicStore.player.random
    }),
  ...mapMutations({setSongProgress:"musicStore/" + types.music.player.changeProgress}),
  },
  methods:{
    play: function () {
      this.$store.dispatch("musicStore/" + types.music.player.togglePlay);
    },
    changeProgress: function (value) {
      this.$store.dispatch("musicStore/" + types.music.player.changeProgress,value);
    },
    changeVolume: function (value) {
      this.$store.dispatch("musicStore/" + types.music.player.changeVolume,value);
    }

  }
};
</script>

<style scoped lang="stylus">

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
