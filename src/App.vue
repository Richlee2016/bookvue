<template>
  <div id="app">
  	<transition :name="name">
		<router-view></router-view>
		</transition >
  </div>
</template>

<script>
//window.onpopstate=function()
//{
//var yes = window.history;
//console.log(yes);
//}
export default {
	data (){
		return {
			name:'page-go'
		}
	}
}
</script>

<style lang='scss'>
.page-go-enter-active{
	-webkit-transition: 0.4s ease-in-out;
}
.page-go-enter{
	-webkit-transform: translateX(100%);
}
</style>
