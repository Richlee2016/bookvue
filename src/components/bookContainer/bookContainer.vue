<template>
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
			bannerpage:'containerPage'
		})
	},
	created (){
		this.$store.dispatch(types.ID_JUMP,{list:this.$route.query.id});
	}
}
</script>
