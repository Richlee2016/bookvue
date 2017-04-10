<template>
	<div class="scroll-container" v-rScroll="true">
		<div>
			<slot></slot>
		<div>
	</div>
</template>

<script>
import IScroll from 'iscroll'
export default {
	props:{
		
	},
	watch:{
		
	},
	methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.scroll-container{
	position: absolute;
    left: 0px;
    top: 50px;
    right: 0px;
    bottom: 0px;
    overflow: hidden;
}
</style>
