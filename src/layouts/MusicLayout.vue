<template>
  <q-layout view="lHh LpR fFf">
    <q-drawer v-model="left" :width="150" side="left">
      <div class="column drawer">
        <div class="col">
          <q-list dark>
            <q-item to="/music" active-class="menu-link">
              <q-item-section class="icon-player">
                <q-icon name="fas fa-play"></q-icon>
              </q-item-section>
              <q-item-section>Player</q-item-section>
            </q-item>

            <q-item
              to="/music/folders"
              active-class="menu-link"
              class="list-item"
            >
              <q-item-section class="icon-folder">
                <q-icon name="fas fa-folder"></q-icon>
              </q-item-section>
              <q-item-section>Folders</q-item-section>
            </q-item>
            <q-item to="/music/youtube" active-class="menu-link">
              <q-item-section class="icon-youtube">
                <q-icon name="fab fa-youtube"></q-icon>
              </q-item-section>
              <q-item-section>Youtube</q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="row">
          <div class="col">
            <q-list>
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

    <q-footer class="footer">
      <Control></Control>
    </q-footer>
  </q-layout>
</template>

<script>
import Control from "../components/Music/ControlComponent";
export default {
  name: "MusicLayout",
  components: { Control },
  component: {
    Control
  },
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
@import "./../css/Music/Music.styl"
.footer
  height 10vh
  background-color hsla(120, 100%, 0%, 0.6)

.drawer
  background-color hsla(120, 100%, 0%, 0.6)
  height 90vh

.icon-folder
  color: #ffd005

.icon-youtube
  color: red

.icon-player
  color green

.menu-link
  background-color hsla(0,100%,0%,0.4)

.menu-link-bug
  color: white


.text{
  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}
</style>
