import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue} from 'bootstrap-vue'
import { routes } from "./routes"
import {en} from './localization/en'
import {tr} from './localization/tr'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(en,tr)
Vue.use(VueResource)


export const eventBus = new Vue()

Vue.filter("localization", (value) => {
  eventBus.$on("languageChanged",(value) => {
    if(value === "EN"){
      tr.active = false
      en.active = true
      return en[value]
    }else{
      tr.active = true
      en.active = false
     return tr[value]
   }
  })

  if(en.active){
    return en[value]
  }else{
   return tr[value]
 }
 
})


const router = new VueRouter({
  routes,  
  mode : 'history' 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
