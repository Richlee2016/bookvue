<template>
  <div class="index">
  	<div class="top-nav">
  		<a>熊猫人之书城联盟</a>
  	</div>
	<keep-alive>
	<v-bookcity></v-bookcity>
	</keep-alive>
  </div>
</template>

<script>
import bookCity from './bookcity/bookcity'
import {translate} from 'assets/mixins'
export default {
	components:{
		"v-bookcity":bookCity,
	},
	mixins:[translate],
	methods:{
		
	},
	created (){
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "./index.scss";
</style>
