import Vue from 'vue'
import types from 'types'
//import 
const state = {
	detail:{},	
  	chapter:{},
  	bookText:{}
}
const getters ={
//	detailpage (){
//		var res = state.detail,item
//		if(res.item){
//			return {
//				comment:res.comment,
//				item:res.item,
//				related:res.related
//			};
//		};
//		return {
//			comment:{},
//			item:{},
//			related:[]
//		};
//	}
}

const mutations = {
		[types.GET_CHAPTER] (state,{chapter}){
		 		state.chapter = chapter;
		},
		[types.GET_TEXT] (state,{chapter}){
		 		state.bookText = chapter;
		},
//		[types.DETAIL_PAGE] (state, {detail}){
//				state.detail = detail;
//		}
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
		},
//		[types.DETAIL_PAGE] ({commit},{list}){
//				axios.post("http://localhost:3000/api/detail",{list:list})
//				.then( (res) => {
//					if(res.status == 200){
//						commit(types.DETAIL_PAGE,{detail:res.data},);
//					};
//				})
//				.catch( (err) => {
//					cosnole.log(err);
//				})	
//		}
}

export default {
  state,
  mutations,
  actions,
  getters
}
