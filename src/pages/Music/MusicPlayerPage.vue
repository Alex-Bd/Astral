<template>
  <q-page>
    <div class="row header items-center">
      <div class="col-1">
        <q-btn-group flat>
          <q-btn
            @click="$router.replace({ path: '/music/file' })"
            flat
            outline
            icon="fas fa-level-up-alt"
          />
          <q-btn flat outline icon="fas fa-cog" />
        </q-btn-group>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-table
          :data="songs"
          :columns="columns"
          row-key="name"
          class="table"
          :pagination.sync="pagination"
        >
          <q-tr
            class="table-body"
            slot="body"
            slot-scope="props"
            :props="props"
            @click.native="playSong(props.row)"
          >
            <q-td key="name" :props="props">{{ props.row.name }}</q-td>
            <q-td key="duration" :props="props">{{ props.row.duration }}</q-td>
            <q-td key="artist" :props="props">{{ props.row.artist }}</q-td>
            <q-td key="album" :props="props">{{ props.row.album }}</q-td>
          </q-tr>
        </q-table>
      </div>
    </div>

    <div class="row">
      <div class="col-10">
        <div class="row align">
          <div class="col">
            <q-icon name="fas fa-backward" color="white" size="8vh"></q-icon>
          </div>
          <div class="col">
            <q-icon name="fas fa-play" color="white" size="8vh"></q-icon>
          </div>
          <div class="col">
            <q-icon name="fas fa-forward" color="white" size="8vh"></q-icon>
          </div>
        </div>
      </div>
      <div class="col-2 self-center">
        <div class="row">
          <div class="col">
            <q-icon name="fas fa-redo" color="white" size="2vh"></q-icon>
          </div>
          <div class="col">
            <q-icon name="fas fa-random" color="white" size="2vh"></q-icon>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import types from "./../../store/types";
export default {
  name: "MusicPlayerPage",
  data: () => ({
    pagination: {
      rowsPerPage: "0"
    },
    columns: [
      {
        name: "name",
        label: "Name",
        align: "left",
        field: "name",
        sortable: true
      },
      {
        name: "duration",
        label: "Duration",
        align: "middle",
        field: "duration"
      },
      {
        name: "artist",
        label: "Artist",
        align: "middle",
        field: "artist"
      },
      {
        name: "album",
        label: "Album",
        align: "middle",
        field: "album"
      }
    ]
  }),
  computed: {
    ...mapState({
      songs: state => state.musicStore.player.currentAlbum
    })
  },
  methods: {
    playSong: function(props) {
      this.$store.dispatch("musicStore/" + types.music.loadMusic, {
        artist: props.artist,
        album: this.songs
      });
    }
  }
};
</script>

<style scoped lang="stylus">

.table{
  width: 100%;
  color white
  mix-blend-mode:luminosity;
}
  .table-body{
    color white
    mix-blend-mode:luminosity;
    background-color inherit
  }
</style>
