<template>
	<div :class="">
  		<v-title
		:title="weekHotData.title"	
			></v-title>
		<v-blockthree
		:hot="weekHotData.data"	
			></v-blockthree>
		<v-more
			
			></v-more>	
	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import boxBlockThree from 'components/common/boxBlockThree'
import bookMore from 'components/common/bookMore'

export default {
	props :{
		vclass:{
			type:String,
			default:'boxone'
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
