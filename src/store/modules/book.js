import Vue from 'vue'
import types from 'types'
//import 
const state = {
  chapter:{},
  bookText:{}
}

const getters ={
	
}

const mutations = {
		[types.GET_CHAPTER] (state,{chapter}){
		 		state.chapter = chapter;
		},
		[types.GET_TEXT] (state,{chapter}){
		 		state.bookText = chapter;
		}
}

const actions = {
		[types.GET_CHAPTER] ({commit}){
				axios.get("http://localhost:3000/api/chapter")
				.then(function (response) {
					commit(types.GET_CHAPTER,{chapter:response.data});
			  	})
				.catch(function (error) {
				    console.log(error);
			  	});
		},
		[types.GET_TEXT] ({commit},{chapter}){
				axios.get("http://localhost:3000/api/read?chapter="+ 2)
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
}

export default {
  state,
  mutations,
  actions,
  getters
}
