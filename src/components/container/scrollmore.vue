<template>
	  <div class="scroll-more">
			<v-head
			:title="book.label"	
				></v-head>
			<div v-if="book.description">
				<p class="sm-description">{{book.description}}</p>
			</div>
			<section>
			<div class="container-inner" v-for="book in book.items">
				<v-blockone
				:prop="book"
					></v-blockone>
			</div>
			</section>
	  </div>
</template>

<script>
import types from 'types'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import {morefiction} from 'service/serviceApi'
export default {
	components :{
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	data (){
		return {
			book:{}
		}
	},
	mounted (){
		morefiction(this.$route.params.id,0,10)
		.then( res => {
			this.book = res.data;
			console.log(res.data);
		})
		.catch( err => {
			csonole.log(err);
		})
	}
}
</script>
<style lang="scss">
.sm-description{
	padding:10px 20px;
	font-size: 14px;
	color:#999;
	line-height: 20px;
}
</style>