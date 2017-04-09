<template>
	  <div class="container-two">
	  		<v-head
	  		:title="title"	
	  			></v-head>
			<v-scroll :scrollStart="scrollStart">
				<section slot="scroll">	  
					<section v-for="(item,index) in container">
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
							@onemore="onemore(item.reference_id)"
								></v-more>
							<div class="clear-line"></div>
					</section>	
				</section>
			</v-scroll>
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
import scroll from 'components/common/scroll'
import {getmore,getfree} from 'service/serviceApi'
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
		//scroll
		"v-scroll":scroll
	},
	data (){
		return {
			onemoreTitle:["查看更多","更多主编推荐>>","更多新书抢鲜读>>","更多新书抢鲜读>>"],
			name:"title",
			container:[],
			foot:"更多",
			scrollStart:false
		}
	},
	computed :{
		title (){
			let title = this.name;
			var res = title.match(chineseReg);
			return res?res[0]:res
		},
		titleone (){
			var data = this.container;
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
	methods: {
		onemore (id){
			this.$router.push({path: '/containerone/'+ id + '?start=0&count=10'})
		}
	},
	mounted (){
		getmore(this.$route.params.id)
		.then( res => {
			this.name = res.data.hidden_info;
			this.container = res.data.items;
		}).
		then( () => {
			this.scrollStart = true;
		})
	}
}
</script>