<template>
  <div id="app">
    <tool-Bar></tool-Bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar
  },
 
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
