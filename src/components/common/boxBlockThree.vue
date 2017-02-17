<template>
  	<ul class="box-block-three">
		<li v-for="item in hot">
			<img :src="item.cover"/>
			<span>{{item.title}}</span>
		</li>
  	</ul>
</template>

<script>
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
export default {
	components :{
		"v-title":bookTitle,
		"v-more":bookMore
	},
	props :{
		hot:{
			type:Array,
			default (){
				return []
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.box-block-three{
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    display: -webkit-flex;
    display: flex;
    flex-wrap:wrap;
    li{
        min-height: 160px;
       	flex: 1;
       	min-width: 33.33%;
       	text-align: center;
        img{
        	display:inline-block;
        	width: 88px;
        	height: 114px;
        	margin-top: 10px;
        }
        span{
        	display: inline-block;
        	width: 88px;
        	line-height: 20px;
        	font-size: 12px;
        	color: rgba(0,0,0,0.4);
        }
    }
}
</style>
