import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
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
  },
  mutations: {
    SOCKET_ONOPEN (state) {
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state) {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    SOCKET_ONMESSAGE (state, message) {
      const { id } = message;
      state.comments = state.comments.filter(m => m.id !== id)
    },
    SOCKET_RECONNECT (state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR (state) {
      state.socket.reconnectError = true;
    },
  }
})
