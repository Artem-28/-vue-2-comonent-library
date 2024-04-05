import Vue from 'vue';
import App from './App.vue';
import tComponentLibrary from '@/index';

Vue.config.productionTip = false;
Vue.use(tComponentLibrary);

new Vue({
  render: h => h(App),
}).$mount('#app');
