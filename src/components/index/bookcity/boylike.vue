<template>
  <div class="boy-like">
		<v-title
		:type="false"
		:title="data.title"
			></v-title>
		<ul class="boy-lick-box" v-for="(n,index) in data.one" v-show="index===num">
			<li v-for='item in n'>
				<v-blockone
				:prop="item"	
					></v-blockone>
			</li>
		</ul>
		<v-more
		:type="false"
		:titleone="'换一换'"
		:titletwo="'男生频道>>'"
		@onemore ="onemore"
			></v-more>
	</div>
</template>

<script>
import types from 'types' 
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
	data (){
		return {
			num:0
		}
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
		onemore (){
			this.num++;
			this.num = this.num%3;
		}
	}
}
</script>
