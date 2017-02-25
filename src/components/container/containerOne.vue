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
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	computed :{
		...mapGetters({
			container:'containerPage'
		})
	},
	created (){
		this.$nextTick(() => {
			this.$store.dispatch(types.ID_JUMP,{list:this.$route.query.id});
		});
	}
}
</script>