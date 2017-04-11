// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex
import store from './store'

//index
import Index from './components/index/index'
//banner
import Banner from 'components/container/banner'
//bookContainer
import containerOne from 'components/container/containerOne'
import containerTwo from 'components/container/containerTwo'
import containerThree from 'components/container/containerThree'
import containerFour from 'components/container/containerFour'
import category from 'components/container/category'
import ranks from 'components/container/ranks'
import detail from 'components/container/detail'
import search from 'components/container/search'
import free from 'components/container/free'
import scrollmore from 'components/container/scrollmore'
import test from 'assets/test'
//fiction
import categoryFiction from 'components/fiction/category'
import ranksFiction from 'components/fiction/ranks'
//book
import Book from './components/book/book'
//page
import VueRouter from 'vue-router'

// import Scroll from 'assets/plugin/scroll'
import Loading from 'assets/plugin/loading/loading'
Vue.use(Loading);


Vue.use(VueRouter);
// window.axios = axios;


/* eslint-disable no-new */

const router = new VueRouter({
    routes: [
        { path: '/test', component: test },
        { path: '/', component: Index },
        { path: '/book/:id', component: Book },
        { path: '/banner/:id', component: Banner },
        { path: '/containerone/:id', component: containerOne },
        { path: '/containertwo/:id', component: containerTwo },
        { path: '/containerthree/', component: containerThree },
        { path: '/containerfour', component: containerFour },
        { path: '/free', component: free },
        { path: '/category', component: category },
        { path: '/ranks', component: ranks },
        { path: '/detail/:id', component: detail },
        { path: '/search', component: search },
        { path: '/scrollmore/:id', component: scrollmore },
        { path: '/categoryfiction/:id', component: categoryFiction },
        { path: '/ranksfiction/:id', component: ranksFiction }
    ],
    //回退页面 滚动位置设置		
    scrollBehavior(to, from, savedPosition) {
        return { x: savedPosition.x, y: savedPosition.y }
    }
});

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')