<template>
  		<div :class="data.vclass">
  			<v-title></v-title>
  			<v-blockthree
  			:hot="data.data"	
  				></v-blockthree>
  			<v-more></v-more>	
  		</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import boxBlockThree from 'components/common/boxBlockThree'
import bookMore from 'components/common/bookMore'

export default {
	props :{
		data:{
			type:Object,
			default (){
				return {
					vclass:"week-hot",
					data:{},
					title:{},
					more:{}
				}
			}
		},
		
	},
	components :{
		"v-title":bookTitle,
		"v-blockthree":boxBlockThree,
		"v-more":bookMore
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
