<template>
	  <div class="ranks-fiction">
			<v-head
			:title="title"	
				></v-head>
			<div class="rank-fiction-nav">
				<div>
					<span v-for="(nav,index) in rankNavs" @click="lineMoveGo(index)">{{nav}}</span>
					<label ref="linemove"></label>
				</div>
			</div>
			<div class="clear-line"></div>
			<section>
				<div class="container-inner" v-for="book in book.items">
					<v-blockone
					:prop="book"
						></v-blockone>
				</div>
			</section>
	  </div>
</template>

<script>
import types from 'types'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import tab from 'components/common/tab'
import {ranksFiction} from 'service/serviceApi'
export default {
	components :{
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
		//tab
		"v-tab":tab
	},
	data (){
		return {
			title:"",
			book:{},
			rankNavs:["周榜","月榜","总榜"],
			rankNum:[]
		}
	},
	computed:{
		
	},
	methods:{
		_getBook(start,count,type){
			ranksFiction(start,count,type)
			.then(res => {
				this.book = res.data;
			})
			.catch(err => {
				console.log(err);
			})
		},
		lineMoveGo(i){
			let dom = this.$refs.linemove;
			let wi = dom.offsetWidth;
			dom.style.WebkitTransform = `translateX(${wi*i}px)`;
			dom.style.transform = `translateX(${wi*i}px)`;
			this._getBook(0,10,this.rankNum[i]);
		}
	},
	mounted (){
		this.rankNum =this.$route.params.id.split(',');
		this.title = this.$route.query.title;
		this._getBook(0,10,this.rankNum[0]);
	}
}
</script>
<style lang="scss">
.rank-fiction-nav{
	width: 100%;
	>div{
		width: 60%;
		display: -webkit-flex;
		display: flex;
		margin: auto;
		position: relative;
		span{
			-webkit-flex: 1;
			flex: 1;
			text-align: center;
			line-height: 40px;
		}
		label{
			width:33.3%;
			position: absolute;
			bottom: 0px;
			display:block;
			height: 3px;
			-webkit-transition: 0.3s ease-in-out;
			transition: 0.3s ease-in-out;
			&:before{
				content: "";
				float: left;
				width: 60%;
				margin-left: 20%;
				height: 3px;
				background: #50c3d8;
			}
		}
	}
}
</style>