<template>
	<div class="testgo">
		<section>
			<div></div>
		</section>	
		<r-loading></r-loading>	
	</div>
</template>

<script>

export default {
	created(){
		this.$rLoading(function(resolve){
			setTimeout(()=>{
				let oDiv = document.createElement('div');
				document.querySelector('.testgo section').appendChild(oDiv);
				resolve(1);
			},3000)
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.testgo{
	// background: rgba(0,0,0,0.6)
	section{
		div{
			height:600px;
		}
	}
}
</style>
