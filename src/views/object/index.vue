<template>
  <div class="object">
    <el-tabs tab-position="left" style="height: 200px">
      <el-tab-pane label="User">User</el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import constructor from "./modules/constructor.vue"
export default {
  comments: {
    constructor
  }
}
</script>

<style>
</style>