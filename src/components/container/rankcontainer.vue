<template>
  <div class="rank-container">
  		<v-head
  		:title="'排行'"	
  			></v-head>
  		<ul class="rank-box">
  			<li>
  				<div>
  					<img src=""/>
  				</div>
  				<div>
  					<span></span>
  				</div>
  			</li>
  		</ul>
  </div>
</template>

<script>
import types from 'types'
import {mapActions,mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	computed :{
		...mapGetters({
			rankcontainer:'rankpage'
		})
	},
	created (){
		this.$store.dispatch(types.RANK_PAGE);
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
