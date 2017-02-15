<template>
  	<div class="book-box-one">
  		<v-title :title="hot.title"></v-title>
  		<ul class="box-one-main">
  			<li>
  				<div v-for="item in hot.one">
  					<img :src="item.cover"/>
  					<span>{{item.title}}</span>
  				</div>
  			</li>
  			<li>
  				<div  v-for="item in hot.two">
  					<img :src="item.cover"/>
  					<span>{{item.title}}</span>
  				</div>
  			</li>
  		</ul>
  		<div class="box-one-more">查看更多</div>
  	</div>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
export default {
	components :{
		"v-title":bookTitle
	},
	props :{
		hot:{
			type:Object,
			default (){
				return {}
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.book-box-one{
    h3{
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #f0f0f0;
        border-left: 6px solid #ffab18;
        padding-left: 20px;
    }
}
.box-one-main{
    width: 100%;
    li{
        display: -webkit-flex;
        display: flex;
        height: 160px;
        margin-top: 20px;
        >div{
           flex: 1; 
           text-align: center;
	        img{
	        	display:inline-block;
	        	width: 88px;
	        	height: 114px;
	        }
	        span{
	        	display: inline-block;
	        	width: 100%;
	        	line-height: 30px;
	        	font-size: 12px;
	        }
        }
    }
}
.box-one-more{
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-top: 1px solid #f0f0f0 ;
}
</style>
