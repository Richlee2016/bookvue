<template>
	  <div class="container-three">
	  	<v-head
	  		:title="'精选书单'"	
	  			></v-head>
	  	<section v-for="item in container.items">
	  		<v-blockfive
	  		:prop="item"	
	  			></v-blockfive>
	  	</section>
	  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import {chineseReg} from 'assets/util'
import bookHead from 'components/common/bookHead'
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockFive from 'components/common/boxBlockFive'
export default {
	components :{
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockfive":boxBlockFive,
	},
	computed :{
		...mapGetters({
			container:'specialMore'
		})
	},
	created (){
		this.$nextTick(() => {
			this.$store.dispatch(types.SPECIAL_MORE,{start:0,count:10,type:4});
		});		
	}
}
</script>