<template>
  <!--搜索-->
  <div class="banner-city">
	  {{bannerpage}}
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import types from 'types'
export default {
	props:{
		data:{
			type:Object,
			default (){
				return {};
			}
		}
	},
	computed :{
		...mapGetters({
			bannerpage:'bannerPage'
		})
	},
	created (){
		this.$store.dispatch(types.GET_BANNER_PAGE,{list:this.$route.query.id});
	}
}
</script>
