<template>
  <div class="girl-like">
		<v-title
		:type="false"
		:title="data.title"
			></v-title>
		<ul class="girl-lick-box" v-for="(n,index) in data.one" v-show="index===num">
			<li v-for='item in n'>
				<v-blockone
				:prop="item"	
					></v-blockone>
			</li>
		</ul>
		<v-more
		:type="false"
		:titleone="'换一换'"
		:titletwo="'女生频道>>'"
		@onemore="onemore"
		@twomore="twomore(data.id)"
			></v-more>
	</div>
</template>

<script>
import {change} from 'assets/mixins'
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
	mixins:[change],
	props:{
		data:{
			type:Object,
			default (){
				return {};
			}
		}
	},
	methods :{
		twomore (id){
			this.$router.push({ path:'containertwo', query: { id:id }})
		}
	}
}
</script>
