<template>
  <keep-alive>
    <q-page>
      <div class="row header items-center">
        <div class="col-1" @click="goToArtists">
          <q-btn-group flat>
            <q-btn flat outline icon="fas fa-level-up-alt" />
            <q-btn flat outline icon="fas fa-cog" />
          </q-btn-group>
        </div>
      </div>
      <div class="row  justify-center" v-if="showArtists">
        <div
          class="col-2 layout"
          v-for="artist in artistList"
          v-bind:key="artist.id"
        >
          <q-card>
            <q-card-media overlay-position="top">
              <img
                src="./../../statics/Drawn_wallpapers.jpg"
                @click="getAlbum(artist)"
              />
              <q-card-title>
                <q-input
                  class="label"
                  :readonly="true"
                  :value="artist"
                  dark
                ></q-input>
              </q-card-title>
            </q-card-media>
          </q-card>
        </div>
      </div>
      <div class="row  justify-center" v-if="showAlbums">
        <div class="col-2 layout" v-for="album in albumList" v-bind:key="album.id">
          <q-card>
            <router-link class="albumImg" to="/music/player">
              <q-card-media overlay-position="top">
                <img
                  src="./../../statics/Drawn_wallpapers.jpg"
                  @click="selectAlbum(currentArtist, album)"
                />
              </q-card-media>
            </router-link>
            <q-card-title class="card-title">
              <q-input :readonly="true" :value="album" dark></q-input>
            </q-card-title>
          </q-card>
        </div>
      </div>
    </q-page>
  </keep-alive>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MusicFolder",
  data() {
    return {
      artistList: [],
      albumList: [],
      currentArtist: "",
      showArtists: true,
      showAlbums: !this.showArtists,
      label: {
        readonly: true
      }
    };
  },
  //parse vs recalculate from store.. prefer memory usage rather than CPU load
  computed: {
    ...mapState({
      artists: state => state.musicStore.music.music
    })
  },
  methods: {
    getAlbum: function(artist) {
      this.albumList = this.$store.getters["musicStore/music/getAlbum"](artist);
      this.showArtists = false;
      this.currentArtist = artist;
    },
    selectAlbum: function(artist, album) {
      this.$store.dispatch("musicStore/player/changeCurrentAlbum", {
        artist,
        album
      });
    },
    goToArtists: function() {
      this.showArtists = true;
    }
  },
  beforeMount() {
    for (let artist in this.artists) {
      this.artistList.push(this.artists[artist].name);
    }
  }
};
</script>

<style scoped lang="stylus">


.label{
  color white
  mix-blend-mode:luminosity;
  text-align center
}
.layout{
  margin: 3px 3px
  align-content center
  alignment center
}
.header{
  border none
  background-image linear-gradient(to right, white,black);
  height 40px
}
.albumImg{
  height inherit
}
</style>
