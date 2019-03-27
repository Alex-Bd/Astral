<template>
  <div class="column items-center">
    <div class="self-start menu">
      <q-btn flat icon="fas fa-bars" class="menu-btn" size="sm">
        <q-menu
          fit
          anchor="top middle"
          self="bottom middle"
          content-class="bg-black text-white">
          <div>
            <q-list :no-border="true" highlight>
              <q-item link to="music/file">
                <q-item-section>
                  Folders
                </q-item-section>
              </q-item>
              <q-item link to="music/file">
                <q-item-section>
                  Youtube
                </q-item-section>
              </q-item>
              <q-item link to="music/file">
                <q-item-section>
                  ETC
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-menu>
      </q-btn>
    </div>

    <div class="col self-center header">
      Now playing
    </div>
    <q-img
      class="picture"
      :src="url"
      spinner-color="white"
      :contain="true"
    ></q-img>

    <div class="col song-title self-center">
      asdasd
    </div>
    <div class="col artist-album text-center">
      asdas asdasdas
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlayerComp",
  data() {
    return {
      sideBarShow: false,
      url: "https://placeimg.com/500/300/nature"
    };
  },
  methods: {
    openMenu: function() {
      this.sideBarShow = !this.sideBarShow;
    }
  }
};
</script>

<style scoped lang="stylus">
@import "./../../../css/Home/Music/MusicVariables.styl"

.size
  height 100%
  width 100%

.header
  color white
  height $playerHeight*0.08 em

.picture
  height $playerHeight*0.6 em

.song-title
  height $playerHeight*0.1 em
  color white

.artist-album
  height $playerHeight*0.1 em
  color white
  font-size 0.8em

.menu-btn
  width $playerWidth*0.1 em
  height $playerHeight*0.1 em

.menu
   position absolute

/*The List must be max height for the animation to be smooth */
.menu-list {
  height: 22.5em;
}
</style>
