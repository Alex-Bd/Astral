<template>
  <div class="doc-container background size">
    <q-slide-transition>
      <div class="menu" v-show="sideBarShow" :key="sideBarShow">
        <q-list dark class="menu-list" :no-border="true" highlight>
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
      <div class="bar-menu" @click="openMenu" align="middle">
        <q-icon
          class="menu-icon"
          name="fas fa-bars"
          color="white"
          size="1em"
        ></q-icon>
      </div>
      <div class="col">
        Now playing
      </div>
    </div>

    <div class="row items-center picture">
      <div class="col">
        <img
          src="https://e.snmc.io/i/300/w/3e4d06962a18b8c16ca5235c95236cdd/5925287"
          width="auto"
          height="160"
          alt="placeholder"/>
      </div>
    </div>

    <div class="row items-center song-title">
      <div class="col">
        {{ song }}
      </div>
    </div>

    <div class="row items-center artist-and-album">
      <div class="col">{{ artist }} | {{ album }}</div>
    </div>
    <div class="row items-center ">
      <div class="col">
        <Player></Player>
      </div>
    </div>

    <div class="row items-center ">
      <div class="col">
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import player from "./Music/PlayerComponent";
import list from "./Music/ListComponent";
export default {
  name: "MusicTile",
  components: {
    Player: player,
    List: list
  },
  data() {
    return {
      sideBarShow: false
    };
  },
  computed: {
    ...mapState({
      artist: state => state.musicStore.music.currentSong.artist,
      song: state => state.musicStore.music.currentSong.title,
      album: state => state.musicStore.music.currentSong.album
    })
  },
  methods: {
    openMenu: function() {
      this.sideBarShow = !this.sideBarShow;
    }
  },
  beforeMount() {
    // this.$store.dispatch("musicStore/" + types.music.loadMusicList)
  }
};
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
