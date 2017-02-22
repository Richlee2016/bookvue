<template>
  <div class="index">
  	<div class="top-nav">
  		<a @click="cityGo">书城</a>
  		<a @click="framGo">书架</a>
  		<span class="move-line" ref="moveline">
  			<label></label>
  		</span>
  	</div>
  	<div class="index-main" ref="indexmain">
  		<v-bookcity></v-bookcity>
  		<v-bookfram></v-bookfram>
  	</div>
  </div>
</template>

<script>
import bookCity from './bookcity/bookcity'
import bookFram from './bookfram/bookfram'
import mymixin from './mixins'

export default {
	components:{
		"v-bookcity":bookCity,
		"v-bookfram":bookFram
	},
	mixins:[mymixin],
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
