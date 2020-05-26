import Vue from 'vue'
import App from './App.vue'
import login from './pages/login.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#login',
  render: h => h(login)
})
