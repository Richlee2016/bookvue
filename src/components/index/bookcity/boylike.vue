<template>
  <div class="boy-like">
		<v-title
		:type="false"
		:title="data.title"
			></v-title>
		<ul class="girl-lick-box">
			<li v-for="item in data.one">
				<v-blockone
				:prop="item"	
					></v-blockone>
			</li>
		</ul>
		<v-more
		:type="false"
		:titleone="'换一换'"
		:titletwo="'男生频道>>'"
			></v-more>
	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockOne from 'components/common/boxBlockOne'
export default {
	components:{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//书块one
		"v-blockone":boxBlockOne
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
