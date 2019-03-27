<template>
  <div class="column control-size">
    <div class="progress-bar self-center">
      <q-Slider
        dense
        v-model="songProgress"
        :min="0"
        :max="100"
        :step="1"
      ></q-Slider>
    </div>

    <div class="row controls text-center items-center">
      <div class="col">
        <q-icon
          name="fas fa-step-backward"
          color="white"
          class="control-icons"
        ></q-icon>
      </div>
      <div class="col" @click="PlayPause">
        <q-icon :name="playButton" color="white" class="play-icon"></q-icon>
      </div>
      <div class="col">
        <q-icon
          name="fas fa-step-forward"
          color="white"
          class="control-icons"
        ></q-icon>
      </div>
    </div>

    <div class="row volume-and-misc text-center">
      <div class="col self-center" @click="toggleLoop">
        <q-icon
          name="fas fa-redo"
          :color="loopButton"
          class="misc-icons"
        ></q-icon>
      </div>
      <div class="col self-center">
        <q-slider v-model="volumeSlider" :min="0" :max="100" label></q-slider>
      </div>
      <div class="col self-center" @click="toggleRandom">
        <q-icon
          name="fas fa-random"
          :color="randomButton"
          class="misc-icons"
        ></q-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import types from "./../../../store/types";

export default {
  name: "PlayerComponent",
  data() {
    return {
      loopButton: "white",
      randomButton: "white",
      volumeSlider: 1
    };
  },
  computed: {
    ...mapState({
      play: state => state.musicStore.player.play,
      playButton: state => state.musicStore.player.playButton,
      songProgress: state => state.musicStore.player.progress,
      volume: state => state.musicStore.player.volume,
      loop: state => state.musicStore.player.loop,
      random: state => state.musicStore.player.random
    })
  },
  methods: {
    PlayPause: function() {
      if (this.play === "pause") {
        this.$store.dispatch("musicStore/" + types.music.player.start);
      } else {
        this.$store.dispatch("musicStore/" + types.music.player.stop);
      }
    },
    toggleLoop: function() {
      if (this.loopButton === "white") {
        this.$store.dispatch(
          "musicStore/" + types.music.player.toggleLoop,
          true
        );
        this.loopButton = "green";
      } else {
        this.$store.dispatch(
          "musicStore/" + types.music.player.toggleLoop,
          false
        );
        this.loopButton = "white";
      }
    },
    toggleRandom: function() {
      if (this.randomButton === "white") {
        this.$store.dispatch(
          "musicStore/" + types.music.player.toggleRandom,
          true
        );
        this.randomButton = "green";
      } else {
        this.$store.dispatch(
          "musicStore/" + types.music.player.toggleRandom,
          false
        );
        this.randomButton = "white";
      }
    }
  },
  watch: {
    volumeSlider: function(value) {
      this.$store.dispatch(
        "musicStore/" + types.music.player.changeVolume,
        value
      );
    }
  }
};
</script>

<style scoped lang="stylus">
  @import "./../../../css/Home/Music/MusicVariables.styl"

.control-size
  height $controllerHeight em

.progress-bar
  height $controllerHeight*0.2 em
  width  $controllerWidth*0.9 em

.controls
  height $controllerHeight*0.4 em
  width  $controllerWidth em

.volume-and-misc
  height $controllerHeight*0.3 em
  width  $controllerWidth em

.misc-icons
  font-size $controllerHeight*0.13 em

.play-icon
  font-size $controllerHeight*0.27 em
.control-icons
  font-size $controllerHeight*0.2 em
</style>
