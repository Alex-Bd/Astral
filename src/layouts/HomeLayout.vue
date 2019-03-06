<template>
  <q-layout view="lhr lpr lff">
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "HomeLayout",
  methods: {},
  beforeMount() {
    this.$store.dispatch("musicStore/music/loadMusicList");
  }
};
</script>

<style></style>
