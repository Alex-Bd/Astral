<template>
  <div class="doc-container">
    <div class="row" v-for="task in tasks" :key="task.id">
      <div class="col align">
        <q-btn color="deep-purple-10" :flat="true" :label="task.task"> </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TodoTile",
  computed: {
    ...mapState({
      tasks: state => state.todoStore.tasks
    })
  }
};
</script>

<style scoped>
.align {
  text-align: center;
}
</style>
