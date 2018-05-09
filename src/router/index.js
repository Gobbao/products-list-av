import Vue from 'vue'
import Router from 'vue-router'

import ProductList from '_views/ProductList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: ProductList },
    ],
})
