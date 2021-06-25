import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"

import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'

import { dollarFilter, percentFilter } from '@/filters.js'

Vue.use(VueSpinners)

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
