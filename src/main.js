import '_scss/main.scss'

import Vue from 'vue'

import { sync } from 'vuex-router-sync'
import store from '_store'
import router from '_router'

import App from './App.vue'

sync(store, router)

new Vue({
    store,
    router,
    ...App,
}).$mount('#app')
