<template>
	  <div class="container-two">
	  		<v-head
	  		:title="container.title[0]"	
	  			></v-head>
	  		<section v-for="(item,index) in container.data">
	  			<v-title
					:title="item.ad_name"	
						></v-title>
	  			<div class="container-inner" v-for="book in item.data.data">
	  				<v-blockone
	  				:prop="book"
	  					></v-blockone>
	  			</div>
	  			<v-more
					:titleone="titleone[index]"
						></v-more>
					<div class="clear-line"></div>
	  		</section>	
	  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import {chineseReg} from 'assets/util'
import bookHead from 'components/common/bookHead'
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockOne from 'components/common/boxBlockOne'
export default {
	components :{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	data (){
		return {
			onemoreTitle:["查看更多","更多主编推荐>>","更多新书抢鲜读>>","更多新书抢鲜读>>"]
		}
	},
	computed :{
		...mapGetters({
			container:'getMoreData'
		}),
		titleone (){
			var data = this.container.data;
			var res = data.map( (o) => {
									var reg = chineseReg;
									var go = o.hidden_info.match(reg);
									if(go){
										return go[0];
									};
									return "查看更多";
								});
			return res;
		}
	},
	created (){
		this.$nextTick(() => {
			this.$store.dispatch(types.GET_MORE,{list:this.$route.query.id});
		});		
	}
}
</script>