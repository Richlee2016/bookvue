<template>
  	<div class="bookcity">
  		<section>
	  		<div class="city-search">
		  		<v-search></v-search>
	  		</div>
	  		<div class="city-scroll">
		  		<v-swiper :slider="banner">
		  			<div slot="box" class="city-banner" v-for="item in bannerImg.one">
		  				<img :src="item.ad_pic_url"/>
		  			</div>
		  		</v-swiper>
	  		</div>
	  		<ul class="city-nav">
	  			<li v-for="item in navArr">
	  				<a></a>
	  				<span :class="item.icon"></span>
	  				<label>{{item.name}}</label>
	  			</li>
	  		</ul>
	  		<div class="clear-line"></div>
	  		<div class="week-hot">
	  			<v-title
	  			:title="weekHotData.title"	
	  				></v-title>
	  			<v-blockthree
	  			:hot="weekHotData.data"	
	  				></v-blockthree>
	  			<v-more></v-more>	
	  		</div>
	  		<div class="clear-line"></div>	
	  		<div class="recommend">
	  			<v-title
	  			:type="false"
	  			:title="recommend.title"
	  			:tabShow="true"
	  				></v-title>
	  			<ul class="recommend-box">
	  				<li v-for="item in recommend.one">
		  				<v-blockone
		  				:prop="item"	
		  					></v-blockone>
	  				</li>
	  				<li>
		  				<v-blocktwo></v-blocktwo>
	  				</li>
	  			</ul>
	  			<v-more
	  			:type="false"
	  			:titleone="'换一换'"
	  				></v-more>
	  		</div>
	  		<div class="clear-line"></div>	
	  		<div class="girl-like">
	  			<v-title
	  			:type="false"
	  			:title="recommend.title"
	  				></v-title>
	  			<ul class="girl-lick-box">
	  				<li v-for="n in 4">
	  					<v-blockone></v-blockone>
	  				</li>
	  			</ul>
	  			<v-more
	  			:type="false"
	  			:titleone="'换一换'"
	  			:titletwo="'女生频道>>'"
	  				></v-more>
	  		</div>
	  		<div class="clear-line"></div>
  		</section>
  	</div>
</template>

<script>
import types from "types"
import {mapGetters} from 'vuex'
import Search from 'components/common/search'
import richSwiper from 'components/common/richSwiper'
import bookTitle from 'components/common/bookTitle'
import boxBlockOne from 'components/common/boxBlockOne'
import boxBlockTwo from 'components/common/boxBlockTwo'
import boxBlockThree from 'components/common/boxBlockThree'
import bookMore from 'components/common/bookMore'
export default {
	components:{
		//搜索
		"v-search":Search,
		//滑动组件
		"v-swiper":richSwiper,
		//书块one
		"v-blockone":boxBlockOne,
		//书块two
		"v-blocktwo":boxBlockTwo,
		//书块 three
		"v-blockthree":boxBlockThree,
		//标题
		"v-title":bookTitle,
		//更多
		"v-more":bookMore
	},
	data (){
		return {
			img:"",
			navArr:[
					{icon:"c-free",name:"免费"},
					{icon:"c-girl",name:"女生"},
					{icon:"c-boy",name:"男生"},
					{icon:"c-classfy",name:"分类"},
					{icon:"c-rank",name:"排行"}
					],
			banner:{
				swiper:false,
				box:3,
				autoplay:4,
			}
		}
	},
	computed:{
		...mapGetters({
	  		weekHotData:"weekHotData",
	  		bannerImg:"bannerImg",
	  		recommend:"recommend"
	  	})
	},
	created (){
		this.$store.dispatch(types.GET_BOOKCITY);
		setTimeout(() => {
//			console.log(this.bannerImg);
				
		},3000);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
