<template>
    <b-row class="justify-content-md-center">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">
            <ul class="list-unstyled justify-content-md-start">
                <li v-for="comment in comments" :key="comment.id">
                    {{comment.text}}
                   <button aria-hidden="true" @click="removeComment(comment.id)" :disabled="!connected">(удалить)</button>
                </li>
            </ul>
        </b-col>
        <b-col col lg="2"></b-col>
    </b-row>
</template>

<script>
  import Vue from 'vue'
  import VueNativeSock from 'vue-native-websocket'

  Vue.use(VueNativeSock, 'ws://echo.websocket.org', { format: 'json' });

  export default {
    name: 'websocket',
    data:() => ({
        comments: [
          { id: 1, text: 'Тестовый коммент 1' },
          { id: 2, text: 'Это шедевр'},
          { id: 3, text:  'Это прекрасно'},
          { id: 4, text: 'Лучшее, что я видел'},
          { id: 5, text:  'Два чая этому автору'},
          { id: 6, text:  'Три чая этому автору'},
          { id: 7, text:  'Карету этому автору'},
          { id: 8, text:  'Машину этому автору'},
          { id: 9, text:  'Суперигра!'},
          { id: 10, text:  'Черный ящик'},
        ],
        connected: false
    }),
    created() {
      this.$options.sockets.onmessage = (data) => {
        const { id } = JSON.parse(data.data);
        this.removeFromComments(id);
      };
      this.$options.sockets.onopen = () => this.connected = true;
    },
    methods: {
      removeComment: function(id) {
        this.$socket.sendObj({id: id});
      },
      removeFromComments(id) {
        this.comments = this.comments.filter(c => c.id !== id);
      }
    }
  }
</script>

<style scoped>

</style>