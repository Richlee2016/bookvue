<template>
  <div id="app">
	  <!-- 动画效果超级卡顿 还没弄清楚咋回事 待研究 -->
  	<!--<transition :name="name" mode="in-out">-->
		<router-view class="view-container"></router-view>
	<!--</transition >-->
	<!--<transition :name="fadename">-->
		<div class="loadyet" v-show="fade"><img src="./assets/images/loading.gif" /></div>
	<!--</transition >-->
  </div>
</template>

<script>
import types from 'types'
export default {
	data (){
		return {
			name:'page-go',
			fade:false,
			fadename:"load"
		}
	},
	components:{
	},
	watch :{
		'$route' (to, from){
			// if(this.$router.isBack){
			// 	this.name = 'page-back';
			// 	this.$router.isBack = false;
			// }else{
			// 	this.name = 'page-go'
			// };
			// this.fadename = "load"
			// console.log(to.path,from.path);
			// if(to.path === from.path){
			// 	this.name = "";
			// 	this.fadename = "";
			// };
			this.fade = true;
			//切换页面的时候去掉 window.onscroll 监听
			this.$offLoading();
		}
	}
}
</script>

<style lang='scss'>
.loadyet{
	position: fixed;
	z-index: 99;
	left: 0px;
	top: 0px;
	bottom:0px;
	right:0px;
	width: 100%;
	background: rgba(255,255,255,1);
	img{
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -75px;
		margin-top:-18px;
	}
}
// .view-container{
// 	position: absolute;
// 	left: 0px;
// 	top: 0px;
// 	background: white;
// }

// .load-enter-active{
// 	-webkit-transition: 0.6s cubic-bezier(.55,0,.1,1);
// 	transition: 0.6s cubic-bezier(.55,0,.1,1);
// }
// .load-enter{
// 	-webkit-transform: translateX(100%);
// 	transform: translateX(100%);
// 	// opacity:0;
// }

// .page-go-enter-active,.page-go-leave-active,{
// 	-webkit-transition: 0.6s cubic-bezier(.55,0,.1,1);
// 	transition: 0.6s cubic-bezier(.55,0,.1,1);
// }
// .page-go-enter{
// 	-webkit-transform: translateX(100%);
// 	transform: translateX(100%);
// 	opacity:0;
// }
// .page-go-leave-active,{
// 	-webkit-transform: translateX(-100%);
// 	transform: translateX(-100%);
// 	opacity:0;
// }

// .page-back-enter-active,.page-back-leave-active,{
// 	-webkit-transition: 0.6s cubic-bezier(.55,0,.1,1);
// 	transition: 0.6s cubic-bezier(.55,0,.1,1);
// }
// .page-back-enter{
// 	-webkit-transform: translateX(-100%);
// 	transform: translateX(-100%);
// 	opacity:1;
// }
// .page-back-leave-active{
// 	-webkit-transform: translateX(100%);
// 	transform: translateX(100%);
// 	opacity:0;
// }
</style>
