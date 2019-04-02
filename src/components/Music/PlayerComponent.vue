<template>
  <q-page>
    <div class="row background">
      <div class="col">
        <q-list dark>
          <q-item clickable v-ripple :active=true>
            <q-item-section side>1</q-item-section>
            <q-item-section>Legends Never Die</q-item-section>
            <q-item-section>Season 2017</q-item-section>
            <q-item-section>League of Legends</q-item-section>
            <q-item-section side>3:17</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-3">
        <q-scroll-area style="height:90vh;">
        <q-list dark>
          <q-item clickable v-ripple :active=true>
            <q-item-section>
              <q-img
                src="https://i.imgur.com/eukJn7L.jpg"
                class="album-img"
                :ratio="1"
              ></q-img>
            </q-item-section>
            <q-item-section>Legends Never Die</q-item-section>
          </q-item>
          <q-item clickable v-ripple :active=true>
            <q-item-section>
              <q-img
                src="https://i.imgur.com/eukJn7L.jpg"
                class="album-img"
                :ratio="1"
              ></q-img>
            </q-item-section>
            <q-item-section>Legends Never Die</q-item-section>
          </q-item>


        </q-list>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PlayerComponent"
};
</script>

<style scoped lang="stylus">
@import "./../../css/Music/Music.styl"

.album-img
  height 10em
  width 10em
</style>
