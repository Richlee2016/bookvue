<template>
  <div class="recommend">
		<v-title
		:type="false"
		:title="data.title"
		:tabShow="true"
		@boyGo="tabn=0"
		@girlGo="tabn=1"
			></v-title>
		<div v-for="(tab,tabnum) in data.one" v-if="tabnum===tabn">
		<ul class="recommend-box" v-for="(n,nnum) in tab" v-show="nnum===num">
			<li v-for="item in n[0]">
  				<v-blockone
  				:prop="item"
  				:bookrank="1"
  					></v-blockone>
			</li>
			<li v-for="(item,index) in n[1]">
  				<v-blocktwo
  				:prop="item"
  				:rank="index+2"
  					></v-blocktwo>
			</li>
		</ul>
		</div>	
		<v-more
		:type="false"
		:titleone="'换一换'"
		@onemore="onemore"
		@twomore="twomore(data.id)"
			></v-more>
	</div>
</template>

<script>
import types from 'types'
import {mapMutations} from "vuex"
import {change} from 'assets/mixins'
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
	mixins:[change],
	data (){
		return {
			recommend :{},
			tabn:0
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
		twomore (id){
			this.$router.push({ path:'containerone', query: { id:id }})
		}
	}
}
</script>

