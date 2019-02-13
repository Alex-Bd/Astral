<template>
  <div class="row items-center song-list">
    <div class="col">
      <q-list highlight :no-border=true highlight dark>
        <q-item>
          <q-item-side>
            <q-icon name="fas fa-play" color="white" size="0.5em"></q-icon>
          </q-item-side>
          <q-item-main>test</q-item-main>
          <q-item-side>
            3:14
          </q-item-side>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import types from './../../../store/types'

    export default {
        name: "MusicListComponent",

    }
</script>

<style scoped>
  .song-list {
    height: 1em;
  }
</style>
