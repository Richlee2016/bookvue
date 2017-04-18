<template>
  <div id="app">
  	<transition :name="name">
		<router-view class="view-container"></router-view>
	</transition >
	<transition :name="fadename">
		<div class="loadyet" v-show="fade"></div>
	</transition >
	<!--<r-loading></r-loading>-->
  </div>
</template>

<script>
import types from 'types'
import loading from 'components/common/loading'
export default {
	data (){
		return {
			name:'page-go',
			fade:false,
			fadename:"load"
		}
	},
	components:{
		"v-loading":loading
	},
	watch :{
		'$route' (to, from){
			
			if(this.$router.isBack){
				this.name = 'page-back';
				this.$router.isBack = false;
			}else{
				this.name = 'page-go'
			};
			this.fadename = "fade"
			console.log(to.path,from.path);
			if(to.path === from.path || from.path === '/'){
				this.name = "";
				this.fadename = "";
			};
			this.fade = true;
			//切换页面的时候去掉 window.onscroll 监听
			this.$offLoading();
		}
	},
	created(){
		
	}
}
</script>

<style lang='scss'>
.loadyet{
	position: fixed;
	left: 0px;
	top: 0px;
	bottom:0px;
	right:0px;
	width: 100%;
	background: rgba(255,255,255,0.9);
}
.view-container{
	position: absolute;
	left: 0px;
	top: 0px;
	&:before{
		content:"";
		z-index: 9999999;
		display: block;
		position: fixed;
		width: 100%;
		height:100%;
		background:rgba(255,255,255,0.8);
		display:none;
	}
}

.load-enter-active{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}
.load-enter{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	// opacity:0;
}

.page-go-enter-active,.page-go-leave-active,{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}
.page-go-enter{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	// opacity:0;
}
.page-go-leave-active,{
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	// opacity:0;
}

.page-back-enter-active,.page-back-leave-active,{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}
.page-back-enter{
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	// opacity:1;
}
.page-back-leave-active{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	// opacity:0;
}
</style>
