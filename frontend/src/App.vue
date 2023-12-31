<template>
  <main>
    <NavBar />
    <router-view />
  </main>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: "app",
  components: {
    NavBar
  }
})


</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
  color: white;
  width: 100%;
  height: 100vh;
}


</style>
