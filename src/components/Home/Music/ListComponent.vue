<template>
  <div class="row items-center song-list">
    <div class="col">
      <q-list
        highlight
        :no-border="true"
        dark
        v-for="song in album"
        :key="song"
      >
        <q-item>
          <q-item-side>
            <q-icon name="fas fa-play" color="white" size="0.5em"></q-icon>
          </q-item-side>
          <q-item-main> {{ song.split("\\")[3] }}}</q-item-main>
          <q-item-side>
            3:14
          </q-item-side>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MusicListComponent",
  computed: {
    ...mapState({
      album: state => state.musicStore.music.currentAlbum
    })
  }
};
</script>

<style scoped>
.song-list {
  height: 1em;
}
</style>
