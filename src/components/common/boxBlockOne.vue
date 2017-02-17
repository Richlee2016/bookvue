<template>
  	<div class="box-block-one">
  		<div class="img">
 	 		<img :src="prop.cover"/>
 	 		<label v-if="bookrank">{{bookrank}}</label>
 	 		<p>{{imglabel}}</p>
  		</div>
  		<div class="text">
  			<h1>{{prop.title}}</h1>
  			<h3>{{prop.authors}}</h3>
  			<p>{{prop.summary}}</p>
  			<div>
	  			<label v-for="n in prop.tags">{{n}}</label>
  			</div>
  		</div>
  	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
export default {
	props :{
		prop:{
			type:Object,
			default (){
				return {}
			}
		},
		imglabel:{
			type:String,
			default:"完结"
		},
		bookrank:{
			type:Number,
			default:0
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.box-block-one{
	width: 100%;
	height: 130px;
	padding: 12px 0px;
	display: -webkit-flex;
	display: flex;
    border-bottom: 1px solid #f0f0f0;
	.img{
		position: relative;
		width: 125px;
		height: 100%;
		img{
			display: block;
			width: 87px;
			height: 100%
		}
		label{
			width: 14px;
			height: 22px;
			color: white;
			background: url(../../assets/link.png) no-repeat center;
			background-size: 14px 22px;
			position: absolute;
			left: 10px;
			top: 0px;
			text-align: center;
			line-height: 20px;
			font-size: 12px;
		}
		p{
			position: absolute;
			left: 0px;
			bottom: 0px;
			line-height: 26px;
			color: white;
			font-size: 14px;
			padding-left: 10px;
		}
	}
	.text{
		flex:1;
		h1{
			line-height: 26px;
		}
		h3{
			color: rgba(0,0,0,0.7);
			line-height: 20px;
			font-size: 14px;
		}	
		p{
			min-height: 40px;
			line-height: 20px;
			color: rgba(0,0,0,0.6);
		    overflow: hidden;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    word-break: break-all;
		    font-size: 12px;
		}
		div{
			max-height: 56px;
			overflow: hidden;
		}
		label{
			margin-top: 6px;
			display: inline-block;
			padding:2px 6px;
			border:#53ac7d 1px solid;
			color:#53ac7d;
			font-size: 12px;
			margin-right: 6px;
			border-radius: 2px;
		}	
	}
}
</style>
