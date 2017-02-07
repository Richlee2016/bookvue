<template>
  <div id="app">
  	<transition name='page-show'>
    	<router-view></router-view>
    </transition>	
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.page-show-enter{
	opacity: 0;
	-webkit-transform: scale(0.5);
}
.page-show-enter-active{
	-webkit-transition: 0.4s ease-in-out;
}
</style>
