<template>
    <b-row class="justify-content-md-center">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <ul class="list-unstyled justify-content-md-start">
                <li v-for="comment in comments" :key="comment.id">
                    {{comment.text}}
                   <button aria-hidden="true" @click="removeComment(comment.id)" :disabled="!socket.isConnected">(удалить)</button>
                </li>
            </ul>
        </b-col>
        <b-col col lg="2"></b-col>
    </b-row>
</template>

<script>
  import Vue from 'vue'
  import Vuex, { mapState } from 'vuex'
  import VueWS from 'vue-native-websocket'
  import Observer from 'vue-native-websocket/src/Observer'
  import store from './store'

  Vue.use(Vuex);
  Vue.use(VueWS, 'ws://echo.websocket.org', {
    store,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
    format: 'json'
  });

  export default {
    name: 'websocket',
    store,
    computed: mapState([
      'comments',
      'socket'
    ]),
    created () {
      this.unsubscribe = this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'SOCKET_ONCLOSE' ||
          (mutation.type === 'SOCKET_ONERROR' && !state.websocket.socket.isConnected && !state.websocket.socket.isReconnecting)) {
          this.reconnectWebSocket()
        }
      })
    },
    methods: {
      removeComment: function (id) {
        this.$socket.sendObj({id: id});
      },
      reconnectWebSocket() {
        setTimeout(() => {
          this.$store.commit('SOCKET_ONRECONNECTING', this.$socket)
          this.$socket = new Observer(wsEndpoint, wsOptions)
          this.$socket.onopen = () => {
            this.$store.commit('SOCKET_ONOPEN', this.$socket)
          }
        }, 2000)
      }
    },
    beforeDestroy () {
      this.unsubscribe.call();
    }
  }
</script>

<style scoped>

</style>