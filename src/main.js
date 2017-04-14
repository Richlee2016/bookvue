// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//vuex
import store from './store'

//下拉加载数据插件
import Loading from 'assets/plugin/loading/loading'

//路由
import VueRouter from 'vue-router'
//前进 返回 判断 设置
VueRouter.prototype.isBack = false;
VueRouter.prototype.goback = function() {
    this.isBack = true;
    this.go(-1);
};

Vue.use(Loading);
Vue.use(VueRouter);

//懒加载
const index = r => require.ensure([], () => r(require('./components/index/index')), 'index');
const banner = r => require.ensure([], () => r(require('./components/container/banner')), 'banner');
const containerOne = r => require.ensure([], () => r(require('components/container/containerOne')), 'containerOne');
const containerTwo = r => require.ensure([], () => r(require('components/container/containerTwo')), 'containerTwo');
const containerThree = r => require.ensure([], () => r(require('components/container/containerThree')), 'containerThree');
const containerFour = r => require.ensure([], () => r(require('components/container/containerFour')), 'containerFour');
const category = r => require.ensure([], () => r(require('components/container/category')), 'category');
const ranks = r => require.ensure([], () => r(require('components/container/ranks')), 'ranks');
const detail = r => require.ensure([], () => r(require('components/container/detail')), 'detail');
const search = r => require.ensure([], () => r(require('components/container/search')), 'search');
const free = r => require.ensure([], () => r(require('components/container/free')), 'free');
const scrollmore = r => require.ensure([], () => r(require('components/container/scrollmore')), 'scrollmore');
const categoryFiction = r => require.ensure([], () => r(require('components/fiction/category')), 'categoryFiction');
const ranksFiction = r => require.ensure([], () => r(require('components/fiction/ranks')), 'ranksFiction');
const book = r => require.ensure([], () => r(require('components/book/book')), 'book');

//测试页面
import test from 'assets/test.vue'

const router = new VueRouter({
    routes: [
        { path: '/test', component: test },
        { path: '/', component: index },
        { path: '/book/:id', component: book },
        { path: '/banner/:id', component: banner },
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