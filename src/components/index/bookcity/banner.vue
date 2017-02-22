<template>
  <div class="banner-city">
		<div class="city-search" @click="search">
	  		<v-search></v-search>
		</div>
		<div class="city-scroll">
	  		<v-swiper :slider="banner">
	  			<div slot="box" class="city-banner" v-for="item in data.one">
	  				<router-link :to="{path: '/banner', query: { id: item.reference_id }}">
		  				<img :src="item.ad_pic_url"/>
	  				</router-link>
	  			</div>
	  		</v-swiper>
		</div>
		<!--导航-->
		<ul class="city-nav">
			<li v-for="item in navArr">
				<a></a>
				<span :class="item.icon"></span>
				<label>{{item.name}}</label>
			</li>
		</ul>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import types from 'types'
import richSwiper from 'components/common/richSwiper'
import Search from 'components/common/search'
export default {
	components:{
		//搜索
		"v-search":Search,
		//滑动
		"v-swiper":richSwiper,
	},
	data (){
		return {
			banner:{
				swiper:false,
				box:3,
				autoplay:4,
			},
			navArr:[
					{icon:"c-free",name:"免费"},
					{icon:"c-girl",name:"女生"},
					{icon:"c-boy",name:"男生"},
					{icon:"c-classfy",name:"分类"},
					{icon:"c-rank",name:"排行"}
			],
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
		...mapActions({
			search:types.GET_SEARCH_PAGE
		})
	}
}
</script>
