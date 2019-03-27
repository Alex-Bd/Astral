<template>
  <q-page>
  <div class="root">
    <div class="row ">

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>

      <div class="col-2">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar-framework.org/img/mountains.jpg"
        :ratio="1"
      ></q-img>
      <q-card-section>
        <div class="text-h6">Text</div>
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
      </div>



    </div>
  </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MusicFolder",
  data() {
    return {
      artistList: [],
    };
  },
  //parse vs recalculate from store.. prefer memory usage rather than CPU load
  computed: {
    ...mapState({
      artists: state => state.musicStore.music.music
    })
  },
  methods: {
  },
  beforeMount() {
    for (let artist in this.artists) {
      this.artistList.push(this.artists[artist].name);
    }
  }
};
</script>

<style scoped lang="stylus">
.root{
padding 10px
}

.label{
  color white
  mix-blend-mode:luminosity;
  text-align center
}
.layout{
  margin: 3px 3px
  align-content center
  alignment center
}
.header{
  border none
  background-image linear-gradient(to right, white,black);
  height 40px
}
.albumImg{
  height inherit
}
</style>
