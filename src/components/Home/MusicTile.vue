<template>
  <div>
    <div class="row size background">
      <div>
        <div class="col player">
          <Player></Player>
        </div>
        <div class="col controller">
          <Controller></Controller>
        </div>
      </div>
      <div class="col list">
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import player from "./Music/MusicPlayerComp";
import controller from "./Music/MusicControllerComp";
import list from "./Music/MusicListComp";

export default {
  name: "MusicTile",
  components: {
    Player: player,
    Controller: controller,
    List: list
  },
  computed: {
    ...mapState({
      artist: state => state.musicStore.music.currentSong.artist,
      song: state => state.musicStore.music.currentSong.title,
      album: state => state.musicStore.music.currentSong.album
    })
  },
  beforeMount() {
    // this.$store.dispatch("musicStore/" + types.music.loadMusicList)
  }
};
</script>

<style scoped lang="stylus">
@import "./../../css/Home/Home.styl"
@import "../../css/Home/Music/Music.styl"

.player
  width $playerWidth em
  height $playerHeight em
.controller
  width $controllerWidth em
  height $controllerHeight em
.list
  width $listWidth em
  height $listHeight em
</style>
