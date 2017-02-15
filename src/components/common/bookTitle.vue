<template>
  	<div class="book-title">{{title}}</div>
</template>

<script>
export default {
	props :{
		title:{
			type:String,
			default:"标题"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.book-title{
    position: relative;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f0f0f0;
    border-left: 6px solid #ffab18;
    padding-left: 20px;
}
</style>
