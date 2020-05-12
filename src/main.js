import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCoreVideoPlayer from 'vue-core-video-player'



Vue.config.productionTip = false
Vue.use(VueCoreVideoPlayer)


let data = {
  projectSelected: "",
  projectSiteLink: "",
  projectCodeLink: ""
}



new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
