<template>
  <div class="doc-container background shadow-1">

    <q-context-menu>
      <q-list link separator style="min-width: 150px; max-height: 300px;">
        <q-item v-close-overlay to="music/file">
          <q-item-main label="Player"/>
        </q-item>
      </q-list>
    </q-context-menu>


    <div class="row">
      <div  class="col-4">
        <img src="https://img.purch.com/h/1400/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwNS82NDQvb3JpZ2luYWwvbW9vbi13YXRjaGluZy1uaWdodC0xMDA5MTYtMDIuanBn"
             width="auto"
             height="100">
      </div>

      <div class="col self-center">

        <div class="row">
          <div class="col align">
            {{artist}}
          </div>
        </div>

        <div class="row">
          <div class="col align">
            {{song}}
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-10 ">
        <div class="row align">
          <div class="col">
           <q-icon name="fas fa-backward"  color="white" size="8vh"></q-icon>
          </div>
          <div class="col" @click="PlayPause">
            <q-icon   name= "fas fa-play"  color="white" size="8vh"></q-icon>
          </div>
          <div class="col">
            <q-icon name= "fas fa-forward"  color="white" size="8vh"></q-icon>
          </div>
        </div>
      </div>
      <div class="col-2 self-center">
        <div class="row">
          <div class="col">
            <q-icon name= "fas fa-redo"  color="white" size="2vh"></q-icon>
          </div>
          <div class="col">
            <q-icon name= "fas fa-random"  color="white" size="2vh"></q-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-11 align">
        <q-Slider :min="min" :max="max" :step="1" />
      </div>
      <div class="col-1">
        <q-knob  class=""  :min="min" :max="max" size="3vw" color="primary"/>
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

  .align{
    text-align: center;
  }
  .background{
   background-color: rgba(12, 34, 12, 0.58);
  }
</style>
