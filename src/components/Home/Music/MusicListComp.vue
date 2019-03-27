<template>
  <div class="list-size">
    <q-list dark separator>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fas fa-music" />
        </q-item-section>
        <q-item-section>Song-title</q-item-section>
        <q-item-section side>Song-duration</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="fab fa-youtube" />
        </q-item-section>
        <q-item-section>Youtube-title</q-item-section>
        <q-item-section side>Song-duration</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "MusicListComp"
};
</script>

<style scoped lang="stylus">
@import "./../../../css/Home/Music/MusicVariables.styl"

.list-size
  height $listHeight em
  width $listWidth em
</style>
