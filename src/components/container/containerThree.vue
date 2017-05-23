<template>
	  <div class="container-three">
	  	<v-head
	  		:title="'精选书单'"	
	  			></v-head>
	  	<section v-for="item in container.items">
	  		<v-blockfive
	  		:prop="item"	
	  			></v-blockfive>
	  	</section>
		<v-load
		:load="overLoad"
		@inLoading="inLoading"
		></v-load>  
	  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import {chineseReg} from 'assets/util'
import bookHead from 'components/common/bookHead'
import bookTitle from 'components/common/bookTitle'
import bookMore from 'components/common/bookMore'
import boxBlockFive from 'components/common/boxBlockFive'
import load from 'components/common/load'
import {persistent} from 'service/serviceApi'
export default {
	components :{
		//抬头
		"v-head":bookHead,
		//书块one
		"v-blockfive":boxBlockFive,
		//loading
		"v-load":load
	},
	data (){
		return {
			container:{},
			start:0,
			count:6,
			loadMsg:"",
			isLoad:true,
			overLoad:true
		}
	},
	computed :{
		
	},
	methods:{
		async inLoading(){
			if(this.isLoad){
				this.isLoad = false;
				let res;
				try {
					res =await persistent(this.start,this.count,4);
				} catch (error) {
					console.log(error);
				}
				if (Object.keys(this.container).length === 0) {
					this.container = res.data;
				} else {
					this.container.items = this.container.items.concat(res.data.items);
				};
				this.start += this.count;
				if(res.data.items.length === this.count){
					this.isLoad = true;
				}else{
					this.overLoad = false;
					this.isLoad = false;
				};
				this.$overLoad();
			};
		}
	},
	mounted (){
		// persistent(this.$route.query.start,this.$route.query.count,this.$route.query.type)
		// .then( res => {
		// 	this.container = res.data;
		// 	return Promise.resolve();
		// })
		// .then(() => {
		// 	this.$overLoad();
		// })
		// .catch( err => {
		// 	console.log(err)
		// })		
	}
}
</script>