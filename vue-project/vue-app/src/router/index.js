import Vue from 'vue'
import Router from 'vue-router'
import CotacaoMoedas from '@/components/CotacaoMoedas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CotacaoMoedas',
      component: CotacaoMoedas
    }
  ]
})
