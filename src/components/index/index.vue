<template>
  <div class="index">
  	<router-link to="/cartoon">看个漫画压压惊</router-link>
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
.index{
	height: 1000px;
	background: black;
	transition: 1s ease-in-out;
}
</style>
