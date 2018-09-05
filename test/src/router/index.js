import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import production from '@/components/production'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
           {
           	   path: 'production',
           	   name: 'production',
           	   component: production
           }
      ]
    }
  ]
})
