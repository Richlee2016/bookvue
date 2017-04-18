<template>
  <div class="container-four">
  		<v-head
  		:title="container.title"	
  			></v-head>
  		
			<section v-for="(item,index) in container.data">
	  			<v-title
					:title="item.ad_name"	
						></v-title>
  				<v-blockthree	
					 ></v-blockthree>
					 {{freeData}}
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
import boxBlockThree from 'components/common/boxBlockThree'
export default {
	components :{
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore,
		//抬头
		"v-head":bookHead,
		//书块three
		"v-blockthree":boxBlockThree,
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
		},
		freeData (){
			var data =  this.container;
			var res = data;
			console.log(res);
//			var res = data.forEach( (o) => {
//										console.log(o.data);
//								});
			return res;
		}
	},
	mounted (){
		this.$nextTick(() => {
			this.$store.dispatch(types.GET_MORE,{list:this.$route.query.id});
			return Promise.resolve();
		})
		.then(() => {
			this.$overLoad();
		})
		.catch( err => {
			console.log(err)
		})
	}
}
</script>