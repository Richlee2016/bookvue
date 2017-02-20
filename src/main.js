// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex
import store from './store'
//axios
import axios from 'axios'
//index
import Index from './components/index/index'
//banner
import Banner from 'components/banner/banner'
//book
import Book from './components/book/book'
//page
import VueRouter from 'vue-router'

Vue.use(VueRouter);
window.axios = axios;


/* eslint-disable no-new */

const router = new VueRouter({
	routes:[
				{ path: '/', component: Index},
				{ path: '/book', component: Book},
				{path:'/banner', component:Banner}
			]
});

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

