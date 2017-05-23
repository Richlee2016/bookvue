<template>
	<div class="testgo">
		<section>
			<button>go</button>
		</section>	
	</div>
</template>

<script>
import { freeChapter, freeRead,freeSearch} from 'service/serviceApi'
export default {
	methods:{
		
	},
	created(){
		freeSearch('盘龙')
		.then(res => {
			console.log(res);
		})
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
