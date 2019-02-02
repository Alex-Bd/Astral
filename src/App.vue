<template>
  <div id="q-app">
    <router-view/>
    <div>
      <background></background>
    </div>
  </div>

</template>

<script>
  import background from "./pages/background-process"
export default {
  name: 'App',
  components:{
    background
  }
}
</script>

<style  lang="stylus">
  @import '~variables';
  #q-app{
    background-image: linear-gradient($evening,$sunset);
    background-position: center;
    background-size: cover;
    color: $primary;
  }
</style>
