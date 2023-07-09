<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue"
  export default {
    name: "App",
    components: {
      NavBar
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'montseratt', sans-serif;
  }

  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }
</style>