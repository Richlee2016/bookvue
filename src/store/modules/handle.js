import types from "types"
import {setGroup,chineseReg} from "assets/util"
import requestApi from "assets/requestapi"
const state = {
	//搜索页面
	searchpage:{},
	//containerData
	containerData:{},
	//girlmore
	moreData:{},
	//精选更多
	specialMore:{},
	//分类
	classpageData:{},
	//排行
	rankData :{}
}

const getters ={
	containerPage (){
		return state.containerData;
	},
	getMoreData (){
		let res = state.moreData;
		var str = res.hidden_info;
		var title = "";
		if(str){
			var reg = chineseReg;
			title = str.match(reg)[0];
		};	
		return {
			title:title,
			data:res.items
		};
	},
	specialMore (){
		return state.specialMore;
	},
	classpage (){
		var res = state.classpageData;
		console.log(res.section,[res.book,res.magazine,res.male,res.female]);
		if(res.section){
			return {
				title:[res.section[2],res.section[3]],
				data:[res.male,res.female]
			};
		};
		return {
			title:[],
			data:[]
		}
	},
	rankpage (){
		var res = state.rankData.items;
		var data = [],
			description=[];
		if(res){
			description =res.map( (o) => {
				if( /、/g.test(o.description) ){
					return o.description.split("、");
				}else{
					return o.description.split("\n");
				};
			});
			data = res.filter( (o) => o.id>19);
		};
		return{
			data:data,
			description:description
		};
	}
}

const mutations = {
	//跳转 搜索页
	[types.GET_SEARCH_PAGE] (state,{searchpage}){
		state.searchpage = searchpage;
	},
	//跳转到 banner页
	[types.ID_JUMP] (state,{data}){
		state.containerData = data;
	},
	//更多
	[types.GET_MORE] (state,{data}){
		state.moreData = data;
	},
	//精选更多
	[types.SPECIAL_MORE] (state,{data}){
		state.specialMore = data;
	},
	[types.CLASS_PAGE] (state,{data}){
		state.classpageData = data;
	},
	[types.RANK_PAGE] (state,{data}){
		state.rankData = data;
	}
}

const actions = {
	[types.GET_SEARCH_PAGE] ({commit}){
		axiosPost(requestApi.search,{key:'df_search_tags',a:1},(res) => {
			commit(types.GET_SEARCH_PAGE,{searchpage:res.data},);
		});
	},
	[types.ID_JUMP] ({commit},{list}){
		axiosPost(requestApi.moreone,{start:0,count:10,list:list},(res) => {
			commit(types.ID_JUMP,{data:res.data},);
		});
	},
	[types.GET_MORE] ({commit},{list}){
		axiosPost(requestApi.moretwo,{list:list},(res) => {
			commit(types.GET_MORE,{data:res.data});
		});
	},
	[types.SPECIAL_MORE] ({commit},{start,count,type}){
		axiosPost(requestApi.morethree,{start:start,count:count,type:type},(res) => {
			commit(types.SPECIAL_MORE,{data:res.data});
		});
	},
	[types.CLASS_PAGE] ({commit}){
		axiosGet(requestApi.class,(res) => {
			commit(types.CLASS_PAGE,{data:res.data});
		});
	},
	[types.RANK_PAGE] ({commit}){
		axiosGet(requestApi.rank,(res) => {
			commit(types.RANK_PAGE,{data:res.data});
		});
	}
}
export default {
  state,
  mutations,
  actions,
  getters,
}
