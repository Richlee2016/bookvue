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
		<r-loading
		:loadMsg="loadMsg"
		></r-loading>
  </div>
</template>

<script>
import types from 'types'
import {mapGetters} from 'vuex'
import bookHead from 'components/common/bookHead'
import boxBlockOne from 'components/common/boxBlockOne'
import {morefiction} from 'service/serviceApi'
export default {
	components :{
		"v-head":bookHead,
		//书块one
		"v-blockone":boxBlockOne,
	},
	data (){
		return {
			label:"",
			allbooks:[],
			start:0,
			count:6,
			loadMsg:""
		}
	},
	computed: {
		
	},
	mounted(){
		this.$onLoading((reso)=>{
			morefiction(this.$route.params.id,this.start,this.count)
			.then( res => {
				// this.$letLoad();
				this.label = res.data.label;
				if (Object.keys(this.allbooks).length === 0) {
					this.allbooks = res.data.items;
				} else {
					this.allbooks = this.allbooks.concat(res.data.items);
				};
				this.start += this.count;
				if(res.data.items.length === this.count){
					reso(res);
				}else{
					console.log(0);
				};
				return Promise.resolve();
			})
			.then( () => {
				this.$overLoad();
			})
			.catch(err => {
				console.log(err);
			})
		});
	}
}
</script>