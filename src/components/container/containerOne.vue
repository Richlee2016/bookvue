<template>
  <div class="container-one">
  		<v-head
  		:title="container.label"	
  			></v-head>
  		<section>
  			<div class="container-inner" v-for="item in container.items">
  				<v-blockone
  				:prop="item"
  					></v-blockone>
  			</div>
  		</section>	
  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import {morefiction} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	data (){
		return {
			container:{}
		}
	},
	computed: {
		
	},
	mounted (){
		morefiction(this.$route.params.id,this.$route.query.start,this.$route.query.count)
		.then( res => {
			this.container = res.data;
		});
	}
}
</script>