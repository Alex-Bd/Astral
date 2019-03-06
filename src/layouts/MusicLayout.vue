<template>
  <q-layout view="lhh Lpr lFr"> <!-- Be sure to play with the Layout demo on docs -->

    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      :width=55>
      <div class="root">
        <div class="row sources">
          <div class="col-12">
            <q-list class="list-col" highlight dark>
                <q-item to="/music/player" :append="true">
                  <q-item-side class="icon-folder" icon="fas fa-play-circle" color="green"></q-item-side>
                </q-item>
                <q-item to="/music/file" :append="true">
                  <q-item-side class="icon-folder" icon="fas fa-folder"></q-item-side>
                </q-item>
                <q-item to="/music/youtube" :append="true">
                  <q-item-side class="icon-youtube" icon="fab fa-youtube"></q-item-side>
                </q-item>
            </q-list>
          </div>
        </div>
        <div class="row back items-end">
          <div class="col-12">
            <q-list class="list-col" highlight dark>
              <q-item to="/">
                  <q-item-side class="icon-back" icon="fas fa-arrow-left"></q-item-side>
                </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import { mapState } from 'vuex'
export default {

  name: 'MusicLayout',
  data () {
    return {
      leftDrawer: true
    }
  },
  beforeMount() {
    //this.$store.dispatch("musicStore/music/loadMusicList")

  }

}
</script>

<style scoped  lang="stylus">

  .root{
    height:100%
    background-image linear-gradient(to bottom,white,black);
    color white
  }
  .sources{
    height 80%
  }
  .back{
    height 20%
  }
   .list-col{
     height: 100%
     border: 0
     padding: 0
    }
  .icon-folder{
    color: #ffd005
  }
  .icon-youtube{
    color: red
  }
  .icon-back{
    color:white
  }

  .buttons:after{
    height 40px
  }
  .text{
    text-overflow: ellipsis;

    /* Required for text-overflow to do anything */
    white-space: nowrap;
    overflow: hidden;
  }
</style>
