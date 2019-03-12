<template>
  <q-layout view="hHh lpR fFf"   >
    <q-drawer v-model="left" side="left" >
      <q-list class="root">
        <q-item to="/music/file" :append="true">
          <q-item-section class="icon-folder">
            <q-icon name="fas fa-play" />
          </q-item-section>
          <q-item-section> Play </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MusicLayout",
  data() {
    return {
      leftDrawer: true
    };
  },
  beforeMount() {
    //this.$store.dispatch("musicStore/music/loadMusicList")
  }
};
</script>

<style scoped lang="stylus">
.root{
  height 100%
  background-color hsla(0,100%,0%,0.5)
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
