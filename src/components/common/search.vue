<template>
  	<div class="search">
	  	<div>
	  		<span @click="searchGo" class="icon-search"></span>
	  	</div>
		  	<label v-if="searchBox">输入书名/作者/关键字</label>
	  		<input v-else v-model="keywords" type="" name="" id="" value="" placeholder="输入书名/作者/关键字" />
  	</div>
</template>

<script>
export default {
	data (){
		return {
			keywords:""
		}
	},
	props :{
			searchBox:{
				type:Boolean,
				default:true
			}
	},
	methods :{
		searchGo (){
			this.$emit("search",this.keywords);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.search{
	width: 100%;
	height: 36px;
	border: 1px solid #f5f5f5;
	color:rgba(0, 0, 0, 0.4);
	display: -webkit-flex;
	display: flex;
	>div{
		width: 36px;
		height: 36px;
		line-height: 40px;
		text-align: center;
		border-right:1px solid #f5f5f5;
		font-size: 18px;
	}
	input{
		flex: 1;
		padding-left: 20px;
		outline: none;
	}
	label{
		flex: 1;
		padding-left: 20px;
		outline: none;
		line-height: 36px
	}
}
</style>
