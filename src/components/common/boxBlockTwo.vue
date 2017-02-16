<template>
  	<div class="box-block-two">
  		<span class="rank">01</span>
  		<p>sdfsdfsdfdsfdsf</p>
  		<label>dsfdsfsdf</label>
  	</div>
</template>

<script>

export default {
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
	.box-block-two{
		width: 100%;
		height: 24px;
		padding: 12px 10px;
		line-height: 24px;
		border-bottom: 1px solid #f0f0f0;
		span{
			display: inline-block;
			width: 24px;
			height: 24px;
			/*text-align: center;*/
			color: red;
		}
		p{
			display: inline-block;
			min-width: 100px;
		}
		label{
			font-size: 12px;
			color: rgba(0,0,0,0.4);
		}
	}
</style>
