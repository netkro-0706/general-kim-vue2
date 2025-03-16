<template>
  <div id="app">
    <tool-bar />
    <router-view />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue"

export default {
  name: "App",
  components: {
    ToolBar: ToolBar,
  },
}
</script>
