<template>
  <div id="app">
  	<transition :name="name">
		<router-view class="view-container"></router-view>
	</transition >
	<!--<r-loading></r-loading>-->
  </div>
</template>

<script>
import loading from 'components/common/loading'
export default {
	data (){
		return {
			name:'page-go',
		}
	},
	components:{
		"v-loading":loading
	},
	watch :{
		'$route' (to, from){
			//页面切换动画 设置
			if(this.$router.isBack){
				this.name = 'page-back';
				console.log('page-back');
				this.$router.isBack = false;
			}else{
				console.log('page-go');
				this.name = 'page-go'
			};
			//切换页面的时候去掉 window.onscroll 监听
			this.$offLoading();
		}
	}
}
</script>

<style lang='scss'>
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
.page-go-enter-active,.page-go-leave-active,{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}
.page-go-enter,{
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
.page-back-enter,{
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	// opacity:1;
}
.page-back-leave-active,{
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	// opacity:0;
}
</style>
