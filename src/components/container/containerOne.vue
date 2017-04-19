<template>
  <div class="container-one">
  		<v-head
  		:title="label"	
  			></v-head>
  		<section>
  			<div class="container-inner" v-for="item in allbooks">
  				<v-blockone
  				:prop="item"
  					></v-blockone>
  			</div>
  		</section>

		<v-load
		:load="overLoad"
		@inLoading="inLoading"
		@more = "morecate"
		></v-load>
  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import load from 'components/common/load'
import {morefiction} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
		"v-load":load
	},
	data (){
		return {
			label:"",
			allbooks:[],
			start:0,
			count:6,
			loadMsg:"",
			isLoad:true,
			overLoad:true
		}
	},
	methods: {
		morecate(){
			this.$router.push({ path:'/containerthree', query:{start:0,count:10,type:4}})
		},
		async inLoading(){
			if(this.isLoad){
				this.isLoad = false;
				let res;
				try {
					res =await morefiction(this.$route.params.id,this.start,this.count);
				} catch (error) {
					console.log(error);
				}
				this.label = res.data.label;
				if (Object.keys(this.allbooks).length === 0) {
					this.allbooks = res.data.items;
				} else {
					this.allbooks = this.allbooks.concat(res.data.items);
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
	}
}
</script>