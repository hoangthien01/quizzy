import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from "./store/index";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
