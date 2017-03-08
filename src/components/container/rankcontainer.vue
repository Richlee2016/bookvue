<template>
  <div class="rank-container">
  		<v-head
  		:title="'排行'"	
  			></v-head>
  		<ul class="rank-box">
  			<li v-for="(item,index) in rankcontainer.data">
  				<div class="left">
  					<img :src="item.cover"/>
  				</div>
  				<div class="right">
  					<p v-for="(n,i) in rankcontainer.description[index]">{{i+1}}:{{n}}</p>
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
.rank-box{
	li{
		padding: 10px;
		display: -webkit-flex;
		display: flex;
		border-bottom: #ddd 1px solid;
		>div{
			-webkit-flex: 1;
			flex: 1;
		}
		.left{
			max-width: 90px;
		}
		.right{
			padding-left: 10px;
		}
		img{
			width: 90px;
			height: 90px;
		}
		p{
			line-height: 30px;
			font-size: 16px;
			font-size: 14px;
			color: #666666;
		}
	}
}

</style>
