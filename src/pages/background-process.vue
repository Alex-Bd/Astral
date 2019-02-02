<template>
    <audio ref="MPlayer" v-bind:src="src" autoplay></audio>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      name: "background-process",
      computed: {
        ...mapState({
          play: state => state.musicStore.player.play,
          src: state => state.musicStore.music.currentSong.src
        })
      },
      watch:{
        play: function (play) {
          if(play=="play")
            this.$refs.MPlayer.play()
          else
            this.$refs.MPlayer.pause()
        }
      }
    }
</script>

<style scoped>

</style>
