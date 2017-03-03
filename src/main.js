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
import Banner from 'components/container/banner'
//bookContainer
import containerOne from 'components/container/containerOne'
import containerTwo from 'components/container/containerTwo'
import containerThree from 'components/container/containerThree'
import containerFour from 'components/container/containerFour'
import classcontainer from 'components/container/classcontainer'
import rankcontainer from 'components/container/rankcontainer'
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
				{path:'/banner', component:Banner},
				{path:'/containerone', component:containerOne},
				{path:'/containertwo', component:containerTwo},
				{path:'/containerthree', component:containerThree},
				{path:'/containerfour', component:containerFour},
				{path:'/classcontainer', component:classcontainer},
				{path:'/rankcontainer', component:rankcontainer}
			],
	//回退页面 滚动位置设置		
//	scrollBehavior (to, from, savedPosition) {
//	  return { x: 0, y: 0 }
//	}		
});

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

