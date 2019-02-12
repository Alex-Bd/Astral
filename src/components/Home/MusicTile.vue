<template>
  <div class="doc-container size background shadow-1">

    <q-context-menu>
      <q-list link separator style="min-width: 150px; max-height: 300px;">
        <q-item v-close-overlay to="music/file">
          <q-item-main label="Player"/>
        </q-item>
      </q-list>
    </q-context-menu>

    <div class="row header items-center">
      <div  class="col">
        Now playing
      </div>
    </div>

    <div class="row items-center picture">
      <div  class="col">
        <img src="https://img.purch.com/h/1400/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwNS82NDQvb3JpZ2luYWwvbW9vbi13YXRjaGluZy1uaWdodC0xMDA5MTYtMDIuanBn"
             width="auto"
             height="120">
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
        <q-Slider :min="min" :max="max" :step="1" />
      </div>
    </div>

    <div class="row items-center controls">
          <div class="col">
            <q-icon name="fas fa-step-backward"  color="white" size="2em"></q-icon>
          </div>
          <div class="col" @click="PlayPause">
            <q-icon   name= "fas fa-play"  color="white" size="3em"></q-icon>
          </div>
          <div class="col">
            <q-icon name= "fas fa-step-forward"  color="white" size="2em"></q-icon>
          </div>
    </div>

    <div class="row items-center volume-and-misc">
      <div class="col-3">
        <q-icon name= "fas fa-redo"  color="white" size="2vh"></q-icon>
      </div>
      <div class="col-6">
        <q-Slider :min="min" :max="max" :step="1" />
      </div>
      <div class="col-3">
        <q-icon name= "fas fa-random"  color="white" size="2vh"></q-icon>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import types from './../../store/types'

  export default {
    name: "MusicTile",
    data () {
      return {
        min: 0,
        max: 100,
        showing: true
      }
    },
    computed: {
      ...mapState({
        artist: state => state.musicStore.music.currentSong.artist,
        song: state => state.musicStore.music.currentSong.title,
        play: state => state.musicStore.player.play
      })
    },
    methods:{
      PlayPause: function () {
        if(this.play === "pause")
          this.$store.dispatch("musicStore/"+types.music.player.start);
        else
          this.$store.dispatch("musicStore/"+types.music.player.stop)
      }
    },
    beforeMount() {
      console.log(this.artist)
    }
  }
</script>

<style scoped>

  .background{
    background-color: rgba(12, 34, 12, 0.58);
  }
  .size{
    width: 15em;
    height: 25em;
  }

  .header{
    height: 10%;
  }
  .picture{
    height: 30%;
  }
  .song-title{
    font-size: 1.2em;
    height: 10%;
  }
  .artist-and-album{
    font-size: 0.8em;
    height: 10%;
  }
  .progress-bar{
   height: 10%;
    width: 95%;
  }
  .controls{
    height: 20%;
  }
  .volume-and-misc{
    height: 10%;
  }

</style>
