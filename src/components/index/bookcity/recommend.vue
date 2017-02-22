<template>
  <div class="recommend">
		<v-title
		:type="false"
		:title="data.title"
		:tabShow="true"
		@boyGo="boyGo"
		@girlGo="girlGo"
			></v-title>
		<ul class="recommend-box">
			<li v-for="item in data.one">
  				<v-blockone
  				:prop="item"
  				:bookrank="1"
  					></v-blockone>
			</li>
			<li v-for="(item,index) in data.two">
  				<v-blocktwo
  				:prop="item"
  				:rank="index+2"
  					></v-blocktwo>
			</li>
		</ul>
		<v-more
		:type="false"
		:titleone="'换一换'"
		@onemore="onemore"
		@twomore="twomore"
			></v-more>
	</div>
</template>

<script>
import types from 'types'
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockOne from 'components/common/boxBlockOne'
import boxBlockTwo from 'components/common/boxBlockTwo'
export default {
	components:{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//书块one
		"v-blockone":boxBlockOne,
		//书块two
		"v-blocktwo":boxBlockTwo
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
			this.$store.commit(types.RECOMMEND_CHANGE);
		},
		twomore (){
			
		},
		boyGo (){
			this.$store.commit(types.RECOMMEND_TAB,{tab:0});
		},
		girlGo (){
			this.$store.commit(types.RECOMMEND_TAB,{tab:1});
		}
	}
}
</script>

