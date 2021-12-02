import Vue from 'vue'
import App from './App.vue'
import Alert from './plugins/AlertPlugin.js'
import ChButton from './components/ChButton'

Vue.config.productionTip = false
Vue.component('ch-button', ChButton)
Vue.use(Alert)


new Vue({
  render: h => h(App),
}).$mount('#app')
