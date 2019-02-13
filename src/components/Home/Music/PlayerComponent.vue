<template>
  <div class="doc-container">
  <div class="row items-center progress-bar">
    <div class="col">
      <q-Slider v-model="songProgress" :min=0 :max=100 :step=1 />
    </div>
  </div>

  <div class="row items-center controls">
    <div class="col">
      <q-icon name="fas fa-step-backward" color="white" size="1.5em"></q-icon>
    </div>
    <div class="col" @click="PlayPause">
      <q-icon :name="playButton" color="white" size="2em"></q-icon>
    </div>
    <div class="col">
      <q-icon name="fas fa-step-forward" color="white" size="1.5em"></q-icon>
    </div>
  </div>

  <div class="row items-center volume-and-misc">
    <div class="col-3" @click="toggleLoop">
      <q-icon name="fas fa-redo" :color="loopButton" size="2vh"></q-icon>
    </div>
    <div class="col-6">
      <q-Slider v-model="volumeSlider" :min=0 :max=1 :step=0.01 label/>
    </div>
    <div class="col-3" @click="toggleRandom">
      <q-icon name="fas fa-random" :color="randomButton" size="2vh"></q-icon>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <q-icon name="fas fa-chevron-down" color="white" size="0.5em"></q-icon>
    </div>
  </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import types from './../../../store/types'

    export default {
        name: "PlayerComponent",
      data() {
        return {
          loopButton: "white",
          randomButton: "white",
          volumeSlider: 1
        }
      },
      computed: {
        ...mapState({
          play: state => state.musicStore.player.play,
          playButton: state => state.musicStore.player.playButton,
          songProgress: state => state.musicStore.player.progress,
          volume: state => state.musicStore.player.volume,
          loop: state => state.musicStore.player.loop,
          random: state => state.musicStore.player.random,
        })
      },
      methods: {
        PlayPause: function () {
          if (this.play === "pause") {
            this.$store.dispatch("musicStore/" + types.music.player.start);
          } else {
            this.$store.dispatch("musicStore/" + types.music.player.stop)
          }
        },
        toggleLoop: function () {
          if (this.loopButton === "white") {
            this.$store.dispatch("musicStore/" + types.music.player.toggleLoop,true)
            this.loopButton = "green";
          }else {
            this.$store.dispatch("musicStore/" + types.music.player.toggleLoop,false)
            this.loopButton = "white"
          }
        },
        toggleRandom: function () {
          if (this.randomButton === "white") {
            this.$store.dispatch("musicStore/" + types.music.player.toggleRandom,true)
            this.randomButton = "green";
          } else {
            this.$store.dispatch("musicStore/" + types.music.player.toggleRandom,false)
            this.randomButton = "white";
          }
        },
      },
      watch:{
        volumeSlider: function (value) {
          this.$store.dispatch("musicStore/" + types.music.player.changeVolume,value)

        }
      }
    }
</script>

<style scoped>
  .progress-bar {
    height: 2em;
    width: 95%;
  }

  .controls {
    height: 3em;
  }

  .volume-and-misc {
    height: 2em;
  }
</style>
