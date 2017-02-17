<template>
  	<div class="bookcity">
  		<section>
  			<!--搜索-->
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
	  		<!--导航-->
	  		<ul class="city-nav">
	  			<li v-for="item in navArr">
	  				<a></a>
	  				<span :class="item.icon"></span>
	  				<label>{{item.name}}</label>
	  			</li>
	  		</ul>
	  		<div class="clear-line"></div>
	  		<!--本周最热-->
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
	  		<!--重磅推荐-->
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
		  				:bookrank="1"
		  					></v-blockone>
	  				</li>
	  				<li v-for="(item,index) in recommend.two">
		  				<v-blocktwo
		  				:prop="item"
		  				:rank="index+2"
		  					></v-blocktwo>
	  				</li>
	  			</ul>
	  			<v-more
	  			:type="false"
	  			:titleone="'换一换'"
	  				></v-more>
	  		</div>
	  		<div class="clear-line"></div>	
	  		<!--女生最爱-->
	  		<div class="girl-like">
	  			<v-title
	  			:type="false"
	  			:title="girllike.title"
	  				></v-title>
	  			<ul class="girl-lick-box">
	  				<li v-for="item in girllike.one">
	  					<v-blockone
	  					:prop="item"	
	  						></v-blockone>
	  				</li>
	  			</ul>
	  			<v-more
	  			:type="false"
	  			:titleone="'换一换'"
	  			:titletwo="'女生频道>>'"
	  				></v-more>
	  		</div>
	  		<div class="clear-line"></div>	
	  		<!--男生最爱-->
	  		<div class="boy-like">
	  			<v-title
	  			:type="false"
	  			:title="boyllike.title"
	  				></v-title>
	  			<ul class="girl-lick-box">
	  				<li v-for="item in boyllike.one">
	  					<v-blockone
	  					:prop="item"	
	  						></v-blockone>
	  				</li>
	  			</ul>
	  			<v-more
	  			:type="false"
	  			:titleone="'换一换'"
	  			:titletwo="'男生频道>>'"
	  				></v-more>
	  		</div>
	  		<div class="clear-line"></div>
	  		<!--限时免费-->
	  		<div class="time-free">
	  			<v-title
	  			:title="timeFree.title"	
	  				></v-title>
	  			<v-blockthree
	  			:hot="timeFree.data"	
	  				></v-blockthree>
	  			<v-more
  				:titleone="'更多限免佳作>>'"
	  				></v-more>	
	  		</div>
	  		<div class="clear-line"></div>
	  		<!--精选专题-->
	  		<div class="special-one">
	  			<v-title
  				:type="false"
	  			:title="special.title"	
	  			:label="'热'"
	  				></v-title>
	  			<v-blockfour
	  			:prop="special.data"	
	  				></v-blockfour>
	  			<v-more
  				:titleone="'更多精彩专题>>'"
	  				></v-more>
	  		</div>
	  		<!--瀑布流-->
	  		<div class="clear-line"></div>
	  		<ul class="pull-book">
	  			<li v-for="item in pullData">
	  				<v-blockone
	  				:prop="item"
	  					></v-blockone>
	  			</li>
	  		</ul>
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
import boxBlockFour from 'components/common/boxBlockFour'
import bookMore from 'components/common/bookMore'
import hammer from 'hammerjs'
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
		//书块 fore
		"v-blockfour":boxBlockFour,
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
	  		recommend:"recommend",
	  		girllike:"girllike",
	  		boyllike:"boyllike",
	  		timeFree:"timeFree",
	  		special:"special",
	  		pullData:"pullData"
	  	})
	},
	created (){
		this.$store.dispatch(types.GET_BOOKCITY);
		this.$store.dispatch(types.GET_PULL_BOOK);
		setTimeout(() => {
//			console.log(this.bannerImg);
		},3000);
//		var ham =new Hammer(this.$refs.slide);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
