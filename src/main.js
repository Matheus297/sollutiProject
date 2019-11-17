
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Cadastro from './pages/Cadastro.vue'
import Lista from './pages/Lista.vue'
import Menu from '../src/pages/Menu'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/cadastro', component: Cadastro},
    {path: '/lista', component: Lista},
    {path:'/', component: Menu}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
