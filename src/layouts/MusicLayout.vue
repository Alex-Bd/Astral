<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer v-model="left" :width="150" side="left">
      <div class="root">
        <div class="folders">
          <q-list>
            <q-item to="/music" active-class="menu-link">
              <q-item-section class="icon-player">
                <q-icon name="fas fa-play" />
              </q-item-section>
              <q-item-section>Player</q-item-section>
            </q-item>

            <q-item to="/music/folders" active-class="menu-link">
              <q-item-section class="icon-folder">
                <q-icon name="fas fa-folder" />
              </q-item-section>
              <q-item-section>Folders</q-item-section>
            </q-item>

            <q-item to="/music/youtube" active-class="menu-link">
              <q-item-section class="icon-youtube">
                <q-icon name="fab fa-youtube" />
              </q-item-section>
              <q-item-section>Youtube</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="navigation column justify-end">
          <div class="col-4">
            <q-list class="navigation-list">
              <q-item to="/" active="false" active-class="menu-link-bug">
                <q-item-section>
                  <q-icon name="fas fa-arrow-left" />
                </q-item-section>
                <q-item-section>Back</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
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
      left: true
    };
  },
  beforeMount() {
    //this.$store.dispatch("musicStore/music/loadMusicList")
  }
};
</script>

<style scoped lang="stylus">
  .root{
    color white
    background-color hsla(0,100%,0%,0.5)
    height 100%
    overflow hidden
  }
 .folders{
  height 80%

}
  .navigation{
    height 20%
    align-items: bottom
  }
    .navigation-list{
      align-items: bottom
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
.icon-player{
  color green
}
.menu-link{
  background-color hsla(0,100%,0%,0.4)
}
  .menu-link-bug{
    color: white
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
