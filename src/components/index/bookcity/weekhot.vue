<template>
  <div class="week-hot">
		<v-title
		:title="data.title"	
			></v-title>
		<v-blockthree
		:hot="data.data"	
			></v-blockthree>
		<v-more></v-more>	
	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockThree from 'components/common/boxBlockThree'
export default {
	components:{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//书块 three
		"v-blockthree":boxBlockThree
	},
	props:{
		data:{
			type:Object,
			default (){
				return {};
			}
		}
	}
}
</script>
