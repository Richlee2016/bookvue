<template>
  <div class="cartoon">
  	<ul>
  		<li v-for="item in arr">{{item}}</li>
  	</ul>
  </div>
</template>

<script>
export default {
	data(){
		return {
			arr:[1,2,3]
		}
	},
	created(){
		this.$http.get("http://localhost:8088/api/cartoonnav")
		.then(
			(ret) => {
				var nav = JSON.parse(ret.body);
				this.arr = nav.result;
			},(err) => {
//				console.log(err)
			}
		);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.cartoon{
	height: 1000px;
	background: red;
}
</style>
