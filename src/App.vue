<template>
  <container id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Vue JS Test</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/fractions">Fractions</b-nav-item>
          <b-nav-item to="/websocket">Websocket</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </container>
</template>

<script>
import Container from "bootstrap-vue/es/components/layout/container";

export default {
  components: {Container},
  name: 'app'
}
</script>

<style lang="scss">
</style>
