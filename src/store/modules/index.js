import types from "types"
import {setGroup,chineseReg} from "assets/util"

const state = {
	//所有数据
	bookCity:{},
	//热门推荐
	changeTime:0,
	//限时免费
	timeFreeData:{},
	//瀑布流
	pullBookData:{},
	//搜索页面
	searchpage:{},
	//containerData
	containerData:{},
	//girlmore
	moreData:{}
}
const util = {
	setData (num,cb){
		let data = state.bookCity.items || [];
		let res = {};
		if(data[num]){
			res = cb.call(this,data[num]);
		};
		return res;
	},
	getBlock (num){
		return this.setData(num,(o) => {
			return {
				title:o.ad_name,
				data:o.data.data,
				id:o.reference_id
			};
		});
	}
}

const getters ={
	weekHotData (){
		var res = util.getBlock(1)
		return res;
	},
	bannerImg (){
		return util.setData(0,(o) => {
			let group =setGroup(o.data.data,3,5);
			return {
				one:group[0],
				two:group[1]
			}
		});
	},
	recommend (){
		return util.setData(2,(o) => {
			let arr = setGroup(o.data.data,{num:6});
				arr = arr.map( (o) => {
					var res = setGroup(o,1,4);
					return res;
				});
				arr = setGroup(arr,{num:2});
			let group = setGroup(arr[state.changeTime],1,4);
			return {
				title:o.ad_name,
				one:arr,
				id:o.reference_id
			}
		});
	},
	girllike (){
		return util.setData(3,(o) => {
			let group =setGroup(o.data.data,{num:3});
			return {
				title:o.ad_name,
				one:group,
				id:370
			}
		});
	},
	boyllike (){
		return util.setData(4,(o) => {
			let group =setGroup(o.data.data,{num:3});
			return {
				title:o.ad_name,
				one:group,
				id:369
			}
		});
	},
	timeFree (){
		let data = state.timeFreeData;
		let arr = [];
		if(data.data){
			arr = data.data.data.map( (o) => {
				return {
					title:o.ad_name,
					cover:o.data.cover,
					id:371
				}
			});
		};
		return {
			title:data.ad_name || "",
			data:arr,
			id:""
		};
	},
	special (){
		var res = util.getBlock(6)
		return res;
	},
	pullData (){
		return state.pullBookData.items || [];
	},
	containerPage (){
		return state.containerData;
	},
	getMoreData (){
		let res = state.moreData;
		var str = res.hidden_info;
		var title = "";
		if(str){
			var reg = chineseReg;
			title = reg.exec(str)[1];
		};	
		return {
			title:title,
			data:res.items
		};
	}
}

const mutations = {
	[types.GET_BOOKCITY] (state, {bookcity}){
		state.bookCity = bookcity;
		state.timeFreeData=bookcity.items[5];
	},
	[types.GET_PULL_BOOK] (state, {pullbook}){
		state.pullBookData = pullbook;
	},
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
}

const actions = {
	[types.GET_BOOKCITY] ({commit}){
		axios.get("http://localhost:3000/api/index")
		.then( (res) => {
			if(res.status == 200){
				commit(types.GET_BOOKCITY,{bookcity:res.data});
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	},
	[types.GET_PULL_BOOK] ({commit}){
		axios.post("http://localhost:3000/api/ajax/pull",{start:0,count:10})
		.then( (res) => {
			if(res.status == 200){
				commit(types.GET_PULL_BOOK,{pullbook:res.data});
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	},
	[types.GET_SEARCH_PAGE] ({commit}){
		axios.post("http://localhost:3000/api/search",{key:'df_search_tags',a:1})
		.then( (res) => {
			if(res.status == 200){
				commit(types.GET_SEARCH_PAGE,{searchpage:res.data},);
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	},
	[types.ID_JUMP] ({commit},{list}){
		axios.post("http://localhost:3000/api/moreone",{start:0,count:10,list:list})
		.then( (res) => {
			if(res.status == 200){
				commit(types.ID_JUMP,{data:res.data},);
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	},
	[types.GET_MORE] ({commit},{list}){
		axios.post("http://localhost:3000/api/moretwo",{list:list})
		.then( (res) => {
			if(res.status == 200){
				commit(types.GET_MORE,{data:res.data},);
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

export default {
  state,
  mutations,
  actions,
  getters,
}
