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
          src: state => state.musicStore.music.currentSong.src,
          loop: state => state.musicStore.player.loop,
          volume:state => state.musicStore.player.volume,
        })
      },
      watch:{
        play: function (play) {
          if(play==="play")
            this.$refs.MPlayer.play()
          else
            this.$refs.MPlayer.pause()
        },
        loop: function (loop) {
          if(loop===true)
            this.$refs.MPlayer.loop=true
          else
            this.$refs.MPlayer.loop=false
        },
        volume: function () {
          this.$refs.MPlayer.volume=this.volume;
        }

      }
    }
</script>

<style scoped>

</style>
