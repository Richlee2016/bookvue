<template>
	  <div class="category-fiction">
			<v-head
			:title="title"	
				></v-head>
			<div class="category-navone">
				<v-tab
				:tabs="navs"
				@tabChoice="navChoice"
				></v-tab>
				<v-tab
				:tabs="tabs"
				@tabChoice="tabChoice"
				></v-tab>
			</div>
			<div class="clear-line"></div>
			<section>
				<div class="container-inner" v-for="book in book.items">
					<v-blockone
					:prop="book"
						></v-blockone>
				</div>
			</section>
	  </div>
</template>

<script>
import types from 'types'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import tab from 'components/common/tab'
import {categoryFiction,categoryTitle} from 'service/serviceApi'
export default {
	components :{
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
		//tab
		"v-tab":tab
	},
	data (){
		return {
			title:"",
			book:{},
			navs:[],
			tabs:[
				{label:'热门',type:"click"},
				{label:'最新',type:"latest"},
				{label:'完结',type:"finish"}
				],
			// initData:{
			// 	navId:$route.params.id,
			// 	start:0,
			// 	count:10,
			// 	type:'click'
			// }	
			navId:0
		}
	},
	computed:{
		
	},
	methods:{
		_getBook(id,start,count,type){
			categoryFiction(id,start,count,type)
			.then(res => {
				this.book = res.data;
			})
			.catch(err => {
				console.log(err);
			})
		},
		navChoice(i){
			let id = this.navs[i].category_id;
			this._getBook(id,0,10);
		},
		tabChoice(i){
			let type = this.tabs[i].type;
			this._getBook(this.navId,0,10,type);
		}
	},
	mounted (){
		this.navId = this.$route.params.id;
		categoryTitle(this.$route.params.id)
		.then(res => {;
			this.navs = res.data.cate.children;
			this.navs.unshift({category_id:this.$route.params.id,label:'全部'})
			this.title = res.data.cate.label;
			return Promise.resolve(res);
		})
		.then( data => {
			this._getBook(this.$route.params.id,0,10);
		})
		.catch(err => {
			console.log(err);
		})
	}
}
</script>
<style lang="scss">
.category-navone{
	padding: 10px 0px;
	ul:nth-type-of(1){
		border-bottom: #dddddd 1px solid;
	}
	ul{
		padding: 0px 20px;
	}
}
</style>