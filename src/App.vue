<template>
  <div id="app">
  	<transition :name="name">
		<router-view style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;background:white;"></router-view>
	</transition >
  </div>
</template>

<script>
export default {
	data (){
		return {
			name:'page-go',
			historySrc:0
		}
	},
	watch :{
		'$route' (to, from){
			if(this.historySrc === 2){
				this.name = 'page-back'
			}else{
				this.name = 'page-go'
			};
			this.historySrc = 0;
		}
	},
	mounted (){
		var self = this;
		window.onpopstate = function(event) {
			self.historySrc++;
		};
	}
}
</script>

<style lang='scss'>
.page-go-enter-active,.page-go-leave-active,{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
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
