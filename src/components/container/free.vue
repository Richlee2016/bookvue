<template>
  <div class="free-container">
		<v-head
		:title="title"	
		></v-head>
			<section>
				<v-title
				:title="free.one?free.one.ad_name : ''"
				></v-title>
				<div>
					<v-blockthree
					:prop="freeOne"
					></v-blockthree>
				</div>
				<div class="clear-line"></div>
			</section>
			<section v-for="(item,index) in free.two">
				<v-title
				:title="item.ad_name"	
				></v-title>
				<div class="container-inner" v-for="book in item.data.data">
					<v-blockone
					:prop="book"
					></v-blockone>
				</div>
				<v-more
				@onemore="onemore(item.reference_id)"
				></v-more>
				<div class="clear-line"></div>
			</section>
			<r-loading></r-loading>
  </div>
</template>

<script>
import types from 'types'
import bookHead from 'components/common/bookHead'
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockOne from 'components/common/boxBlockOne'
import boxBlockThree from 'components/common/boxBlockThree'
import {getfree} from 'service/serviceApi'
import {setGroup} from 'assets/util'
import defaultsDeep from 'lodash/defaultsDeep'
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
		//书块three
		"v-blockthree":boxBlockThree,
	},
	data (){
		return {
			title:"title",
			free:{},
			scrollStart:false
		}
	},
	computed: {
		freeOne (){
			let res = this.free.one || {};
			if(res.data){
				return res.data.data.map( o => o.data)
			}
			return []
		}
	},
	methods: {
		onemore(id){
			this.$router.push({path:'/scrollmore/'+ id})
		}
	},
	mounted (){
		getfree()
		.then(res => {
			this.title = JSON.parse(res.data.hidden_info).title;
			let freeBook = setGroup(res.data.items,1,5);
			this.free = {
				one:freeBook[0][0],
				two:freeBook[1]
			}
			this.$inLoading();
			return Promise.resolve();
		})
		.then(() => {
			// this.$outLoading();
		})
	}
}
</script>
<style lang="scss">


</style>
