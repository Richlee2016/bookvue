<template>
  	<div class="bookcity">
  		<section>
	  		<div class="city-search">
		  		<v-search></v-search>
	  		</div>
	  		<div class="city-scroll">
		  		<v-banner :testImg="img"></v-banner>
	  		</div>
	  		<ul class="city-nav">
	  			<li v-for="item in navArr">
	  				<a></a>
	  				<span :class="item.icon"></span>
	  				<label>{{item.name}}</label>
	  			</li>
	  		</ul>
	  		<div class="clear-line"></div>
	  		<v-boxone
	  			:hot="weekHotData"
	  			></v-boxone>
  		</section>
  	</div>
</template>

<script>
import types from "types"
import {mapGetters} from 'vuex'
import Search from 'components/common/search'
import bannerScroll from 'components/common/bannerScroll'
import bookBoxOne from 'components/common/bookBoxOne'
export default {
	components:{
		"v-search":Search,
		"v-banner":bannerScroll,
		"v-boxone":bookBoxOne
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
					]
		}
	},
	computed:{
		...mapGetters({
	  		weekHotData:"weekHotData"
	  	})
	},
	created (){
		this.$store.dispatch(types.GET_BOOKCITY);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
