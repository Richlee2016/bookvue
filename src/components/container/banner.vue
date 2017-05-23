<template>
  <div class="banner-main">
  		<v-head
  		:title="bannerpage.label"	
  			></v-head>
  		<img class="b-img" :src="bannerpage.banner"/>
  		<p class="description">{{bannerpage.description}}</p>
  		<div class="clear-line"></div>
  		<section>
  			<div class="banner-inner" v-for="item in bannerpage.items">
  				<v-blockone
  				:prop="item"
  				:bookfree="'限免'"
  					></v-blockone>
  			</div>
  		</section>
		<v-more
		:titleone="'查看更多'"
		@onemore="$router.push({ path:'/containerthree', query:{start:0,count:10,type:4}})"
		>
		</v-more>
  </div>
</template>

<script>
import types from 'types'
import {mapActions,mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import bookMore from 'components/common/bookMore'
import {banner} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
		//more
		"v-more":bookMore
	},
	data (){
		return {
			bannerpage:{}
		}
	},
	mounted (){
		banner(this.$route.params.id)
		.then( res => {
			this.bannerpage = res.data;
			return Promise.resolve();
		})
		.then(() => {
			this.$overLoad();
		})
	}
}
</script>
<style lang="scss">
.banner-main{
	.b-img{
		width: 100%;
	}
	.description{
		color: #8d8d8d;
		padding:10px;
		font-size: 14px;
		line-height: 20px;
	}
}	
</style>
