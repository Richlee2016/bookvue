<template>
  <div class="special-one">
		<v-title
		:type="false"
		:title="data.title"	
		:label="'热'"
			></v-title>
		<v-blockfour
		:prop="data.data"
			></v-blockfour>
		<v-more
		:titleone="'更多精彩专题>>'"
		@onemore="onemore(data.id)"
			></v-more>
	</div>
</template>

<script>
import types from 'types'	
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockFour from 'components/common/boxblockfour'
export default {
	components:{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//书块 three
		"v-blockfour":boxBlockFour
	},
	props:{
		data:{
			type:Object,
			default (){
				return {};
			}
		}
	},
	methods :{
		onemore (id){
			this.$router.push({ path:'containerthree', query: { id:id }})
		}
	}
}
</script>
