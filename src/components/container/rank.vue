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
  </div>
</template>

<script>
import types from 'types'
import {mapActions,mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import {ranks} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	computed :{
		...mapGetters({
			bannerpage:'containerPage'
		})
	},
	created (){
		this.$store.dispatch(types.ID_JUMP,{list:this.$route.query.id});
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
