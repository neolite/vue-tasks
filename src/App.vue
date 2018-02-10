<template>
  <container id="app">
    <router-link to="/fractions">Fractions</router-link>
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
