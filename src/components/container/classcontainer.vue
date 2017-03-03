<template>
  <div class="container-four">
  		<v-head
  		:title="'分类'"	
  			></v-head>
  		<section v-for="(item,index) in container.title">
  			<div class="title">
	  			<label>df</label>
	  			<span>{{item.name}}</span>
	  		</div>
	  		<ul class="four_main">
	  			<li v-for="data in container.data[index]">
	  				<div class="left">
	  					<span>{{data.label}}</span>
	  					<label>{{data.fiction_count}}</label>
	  				</div>
	  				<div class="right">
	  					<img :src="data.new_image"/>
	  				</div>
	  			</li>
	  		</ul>
  		</section>
  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
export default {
	components :{
		//抬头
		"v-head":bookHead,
	},
	computed :{
		...mapGetters({
			container:'classpage'
		})
	},
	created (){
		this.$nextTick(() => {
			this.$store.dispatch(types.CLASS_PAGE);
		});
	}
}
</script>
<style lang="scss">
.container-four{
	padding: 5px;
	.title{
		height: 40px;
		line-height:40px;
		border-bottom:1px solid #f0f0f0;
		label{
			display: inline-block;
			width: 30px;
			height: 30px;
			border-radius: 30px;
			background: red;
			text-align: center;
			line-height: 30px;
		}
		span{
			padding-left: 10px;
		}
	}
}
.four_main{
	display: -webkit-flex;
	display: flex;
	flex-wrap:wrap;
	li{
		flex: 1;
		min-width: 46%;
		padding: 5px;
		float: left;
		position: relative;
	}
	.left{
		padding: 16px;
		z-index: 9;
		position: absolute;
		left: 0px;
		top: 0px;
		span,label{
			display: block;
			line-height: 20px;
		}
	}
	.right{
		img{
			width: 100%;
			height: 100%;
		}
	}
}	
</style>
