<template>
  <b-container id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Vue JS Test</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/fractions">Fractions</b-nav-item>
          <b-nav-item to="/websocket">Websocket</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id="pages-wrapper">
      <router-view></router-view>
    </div>

  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  #pages-wrapper{
    margin-top: 20px;
  }
</style>
