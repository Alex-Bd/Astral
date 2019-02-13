<template>
  <div class="doc-container background size">
    <q-slide-transition>
      <div class="menu" v-show="sideBarShow" key="sideBarShow">
        <q-list dark class="menu-list" no-border="true" highlight>
          <q-item link to="music/file">
            <q-item-main>
              Folders
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              Youtube
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              ETC
            </q-item-main>
          </q-item>

        </q-list>

      </div>
    </q-slide-transition>
    <div class="row header items-center">
      <div class="bar-menu" v-ripple.mat @click="openMenu" align="middle">
        <q-icon class="menu-icon" name="fas fa-bars" color="white" size="1em"></q-icon>
      </div>
      <div class="col">
        Now playing
      </div>
    </div>

    <div class="row items-center picture">
      <div class="col">
        <img src="https://e.snmc.io/i/300/w/3e4d06962a18b8c16ca5235c95236cdd/5925287"
             width="auto"
             height="160">
      </div>
    </div>

    <div class="row items-center song-title">
      <div class="col">
        Welcome to the Jungle
      </div>
    </div>

    <div class="row items-center artist-and-album">
      <div class="col">
        Guns 'n Roses | Appetite for Destruction
      </div>
    </div>

    <div class="row items-center progress-bar">
      <div class="col">
        <q-Slider v-model="songProgress" :min="min" :max="max" :step="1"/>
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
        <q-Slider v-model="volumeSlider" :min="0" :max="100" :step="1" label/>
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
    <div class="row items-center song-list">
      <div class="col">
        <q-list highlight no-border="true" highlight dark>
          <q-item>
            <q-item-side>
              <q-icon name="fas fa-play" color="white" size="0.5em"></q-icon>
            </q-item-side>
            <q-item-main>test</q-item-main>
            <q-item-side>
              3:14
            </q-item-side>
          </q-item>

        </q-list>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import types from './../../store/types'

  export default {
    name: "MusicTile",
    data() {
      return {
        sideBarShow: false,
        playButton: "fas fa-play",
        loopButton: "white",
        randomButton: "white",
        volumeSlider: 50
      }
    },
    computed: {
      ...mapState({
        artist: state => state.musicStore.music.currentSong.artist,
        song: state => state.musicStore.music.currentSong.title,
        play: state => state.musicStore.player.play,
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
          this.playButton = "fas fa-play"
        } else {
          this.$store.dispatch("musicStore/" + types.music.player.stop)
          this.playButton = "fas fa-pause"
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
      openMenu: function () {
        this.sideBarShow = !this.sideBarShow
      }
    },
    beforeMount() {

    }
  }
</script>

<style scoped>

  .background {
    background-color: hsla(120, 100%, 0%, 0.6);
  }

  .size {
    width: 15em;
    height: 24em;
    min-height: 24em;
    overflow-y: auto;
  }

  .size::-webkit-scrollbar {
    display: none;
  }

  .header {
    height: 2em;
  }

  .picture {
    height: 10em;
  }

  .song-title {
    font-size: 1.2em;
    height: 2em;
  }

  .artist-and-album {
    font-size: 0.7em;
    height: 1.5em;
  }

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

  .song-list {
    height: 1em;
  }

  .bar-menu {
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    padding-top: 0.65em;

  }

  .menu {
    padding-top: 2.5em;
    position: absolute;
    background-color: hsla(120, 100%, 0%, 0.8);
    height: 25em;
    width: 7.5em;
  }

  /*The List must be max height for the animation to be smooth */
  .menu-list {
    height: 22.5em;
  }
</style>
