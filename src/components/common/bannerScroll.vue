<template>
  	<div class="scrollbox">
	  	<img :src="testImg"/>
  	</div>
</template>

<script>
export default {
	props:{
		testImg:""
	},
	created (){
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.scrollbox{
	width: 100%;
	/*height: 160px;*/
	img{
		display: block;
		width: 100%;
		height: 100%;
	}
}
</style>
