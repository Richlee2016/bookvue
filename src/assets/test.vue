<template>
	<div class="testgo">
		<section>
			<button @click="test">go</button>
		</section>	
	</div>
</template>

<script>
import Z from 'assets/zepto'
export default {
	methods:{
		// test(){
		// 	Z(window).off("scroll");
		// }
	},
	created(){
		// Z(window).on("scroll",function(){
		// 	console.log(0);
		// })
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.testgo{
	height: 2000px;
	// background: rgba(0,0,0,0.6)
	section{
		div{
			height:600px;
		}
	}
}
</style>
