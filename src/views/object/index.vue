<template>
  <div class="object">

    <assign />
    <!-- <constructor /> -->
  </div>
</template>

<script>
import constructor from "./modules/constructor.vue"
import assign from './modules/assign.vue'

export default {
  components: {
    constructor,
    assign
  }
}
</script>

<style>
</style>