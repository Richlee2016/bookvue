<template>
	<div class="scroll-container" ref="scroll">
		<slot name="scroll"></slot>
	</div>
</template>

<script>
import IScroll from 'iscroll'
export default {
	props:{
		scrollStart:{
			type:Boolean,
			default:false
		}
	},
	watch:{
		scrollStart(n,o){
			if(n){
				var scroll = new IScroll(this.$refs.scroll, {click:true});
			};
		}
	},
	methods:{
		_scroll(){
 			// var scroll = new IScroll(this.$refs.scroll, {click:true});
		}
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
