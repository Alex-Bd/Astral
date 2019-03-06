<template>
  <q-layout id="q-app">
    <q-page-container>
      <router-view />
    </q-page-container>
    <div>
      <background></background>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#q-app {
  background-image: url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1953&q=80");
  background-position: center;
  background-size: cover;
  color: white;
}
</style>
