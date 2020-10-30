<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col ">
          <NavSearchBar />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6">
          <ShowResult />
        </div>
        <div class="col-6">
          <ShowMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowMenu from "./components/ShowMenu";
import ShowResult from "./components/ShowResult";
import NavSearchBar from "./components/NavSearchBar";

export default {
  components: {
    ShowMenu,
    ShowResult,
    NavSearchBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
