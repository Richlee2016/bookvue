<template>
  	<div class="bookcity">
  		<div class="city-search">
	  		<v-search></v-search>
  		</div>
  	</div>
</template>

<script>
import Search from 'components/common/search'
export default {
	components:{
		"v-search":Search
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
