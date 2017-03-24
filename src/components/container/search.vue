<template>
  <div class="search-container">
  		<v-head
  		:title="'搜索'"	
  			></v-head>
		<div class="searchpage-box">
		 	<v-search
			 :searchBox='false'
			 @search="search"
			 ></v-search>	
		</div>
		<div class="search-choice">
			<v-colorblock
			v-for="(item,index) in searchChoice"
			:detailId ="item.reference_id"
			:index="index"
			:container="item.ad_name"
			></v-colorblock>	
		</div>
		<ul class="search-result">
			<li v-for="item in searchData">
			<router-link :to="{path:'/detail/'+ item.source_id}">	
				<v-blockone
				:prop="item"
				>
				<slot name="serach">
					<div class="search-text">
						<p>{{item.intro}}</p>
						<h3 class="author">{{item.role[0][1]}}</h3>
					</div>
				</slot>
				</v-blockone>
			</router-link>
			</li>
		</ul>	  
  </div>
</template>

<script>
import types from 'types'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import Search from 'components/common/search'
import colorBlock from 'components/common/colorblock'
import {searchpage,search,read} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
		//搜索
		"v-search":Search,
		//色块
		"v-colorblock":colorBlock
	},
	data (){
		return {
			searchChoice:{},
			searchData:[]
		}
	},
	methods :{
		search (keywords){
			search(0,10,keywords)
			.then( res => {
				this.searchData = res.data.items;
				console.log(res);
			})
		}
	},
	mounted (){
		searchpage()
		.then( res => {
			this.searchChoice = res.data.msg.ads;
		});
	}
}
</script>
<style lang="scss">
.searchpage-box{
	margin-top: 20px;
	padding:0 20px;
	
}
.search-choice{
	padding: 20px;
}
.search-result{
	border-top:1px solid #f0f0f0;
}
.search-text{
	position: absolute;
	width: 100%;
	height: 100%;
	top:26px;
	left:0px;
	padding-bottom:20px;
	margin-top: 10px;
	.author{
		margin-top: 10px;
		font-size: 14px;
		color: #999999;
	}
}
</style>
