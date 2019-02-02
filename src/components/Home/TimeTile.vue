<template>
  <div class="doc-container align">

    <div class="row">
      <div class="col">
        {{date}}
      </div>
    </div>

    <div class="row">
      <div class="col">
        {{time}}
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import types from './../../store/types'

    export default {
      name: "TimeTile",
      computed: {
        ...mapState({
          date: state => state.timeStore.date,
          time: state => state.timeStore.time,
          timezone: state => state.timeStore.timezone
        })
      },
      beforeMount() {
        this.$store.dispatch(types.time.timeRefresh)
      },
      beforeDestroy() {
        this.$store.dispatch(types.time.clearDateInterval)
      }
    }
</script>

<style scoped>
 .align{
   text-align: center;
 }
</style>
