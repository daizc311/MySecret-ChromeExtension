import Vue from 'vue'
import AppPopup from './AppPopup.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from '../store'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    // router,
    el: '#app',
    router,
    store,
    render: h => h(AppPopup)
})
