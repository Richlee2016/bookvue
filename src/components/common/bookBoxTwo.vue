<template>
  	<div class="book-box-two">
  		<v-title></v-title>
  		<div class="box-two-main">
	  		<div class="blockmain">
		  		<v-blockone></v-blockone>
		  		<v-blocktwo></v-blocktwo>
	  		</div>
  		</div>
  		<v-more
  		:type="false"	
  			></v-more>
  	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import boxBlockOne from 'components/common/boxBlockOne'
import boxBlockTwo from 'components/common/boxBlockTwo'
import bookMore from 'components/common/bookMore'

export default {
	components :{
		"v-title":bookTitle,
		"v-blockone":boxBlockOne,
		"v-blocktwo":boxBlockTwo,
		"v-more":bookMore
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
	.book-box-two{
		.blockmain{
			padding-left: 10px;
		}
	}
	.box-two-main{
		
	}
</style>
