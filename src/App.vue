<template>
  <div id="app">
  	<transition :name="name">
		<router-view class="view-container"></router-view>
	</transition >
	<r-loading></r-loading>
  </div>
</template>

<script>
import loading from 'components/common/loading'
export default {
	data (){
		return {
			name:'page-go',
			historySrc:localStorage.getItem('src')?localStorage.getItem('src').split(',') : []
		}
	},
	components:{
		"v-loading":loading
	},
	watch :{
		'$route' (to, from){
			let len = this.historySrc.length;
			if(len === 0){
				 this.historySrc.push(from.path);
				 this.historySrc.push(to.path);
			}else{
				 let isBack = this.historySrc.indexOf(to.path);
				 if(isBack !== -1){
					let res =this.historySrc.slice(0,isBack+1);
					this.historySrc = res;
					this.name = 'page-back'
				 }else{
				 	this.historySrc.push(to.path);
					 this.name = 'page-go'
				 };
			};
			localStorage.setItem('src',this.historySrc);
		}
	},
	mounted (){
		// var self = this;
		// window.onpopstate = function(event) {
		// 	self.historySrc++;
		// };
		// localStorage.clear('src');
		// let num =0;
		// window.addEventListener("popstate", function(e) {
		// 	num++;
		// 	console.log(num);
		// 	console.log(e);
		// });
	}
}
</script>

<style lang='scss'>
.view-container{
	position: absolute;
	left: 0px;
	top: 0px;
}
.page-go-enter-active,.page-go-leave-active,{
	-webkit-transition: 10s ease-in-out;
	transition: 10s ease-in-out;
}
.page-go-enter,{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	opacity:0;
}
.page-go-leave-active,{
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	opacity:0;
}

.page-back-enter-active,.page-back-leave-active,{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}
.page-back-enter,{
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	opacity:1;
}
.page-back-leave-active,{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	opacity:0;
}
</style>
