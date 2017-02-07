// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex
import store from './store'
//page
import Index from './components/index/index'
import Cartoon from './components/cartoon/cartoon'
//page
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

const router = new VueRouter({
	routes:[
				{ path: '/', component: Index },
				{ path: '/cartoon', component: Cartoon }
			]
});

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


//new Vue({
//el: '#app',
//render: h => h(App)
//})
