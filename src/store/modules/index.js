import types from "types"
const state = {
	//所有数据
	bookCity:{},
	//限时免费
	timeFreeData:{},
	//瀑布流
	pullBookData:{},
	//searchpage
	searchpage:{},
	//bannerpage
	bannerpage:{}
}
const util = {
	twoGroup (data,a,b){
		let one = [];
		let two = [];
		for(let i=0; i<a; i++){
			one[i] = data[i]
		};
		if(b){
			for(let j=a; j<a+b; j++){
				two[j-a] = data[j];
			};
		};
		return {
			one:one,
			two:two
		}
	},
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
				data:o.data.data
			};
		});
	},
	unicode (str){
		return unescape(str.replace(/\u/g, "%u"))
	}
}

const getters ={
	weekHotData (){
		var res = util.getBlock(1)
		return res;
	},
	bannerImg (){
		return util.setData(0,(o) => {
			let group =util.twoGroup(o.data.data,3,5);
			return {
				one:group.one,
				two:group.two
			}
		});
	},
	recommend (){
		return util.setData(2,(o) => {
			let group =util.twoGroup(o.data.data,1,5);
			return {
				title:o.ad_name,
				one:group.one,
				two:group.two
			}
		});
	},
	girllike (){
		return util.setData(3,(o) => {
			let group =util.twoGroup(o.data.data,5);
			return {
				title:o.ad_name,
				one:group.one,
				two:group.two
			}
		});
	},
	boyllike (){
		return util.setData(4,(o) => {
			let group =util.twoGroup(o.data.data,5);
			return {
				title:o.ad_name,
				one:group.one,
				two:group.two
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
					cover:o.data.cover
				}
			});
		};
		return {
			title:data.ad_name || "",
			data:arr
		};
	},
	special (){
		var res = util.getBlock(6)
		return res;
	},
	pullData (){
		return state.pullBookData.items || [];
	},
	bannerPage (){
		return state.bannerpage;
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
	[types.GET_SEARCH_PAGE] (state,{searchpage}){
			state.searchpage = searchpage;
	},
	[types.GET_BANNER_PAGE] (state,{bannerpage}){
			state.bannerpage = bannerpage;
			console.log(bannerpage);
	}
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
	[types.GET_BANNER_PAGE] ({commit},{list}){
		axios.post("http://localhost:3000/api/banner",{start:0,count:10,list:list})
		.then( (res) => {
			
			if(res.status == 200){
				commit(types.GET_BANNER_PAGE,{bannerpage:res.data},);
			};
		})
		.catch( (err) => {
			console.log(err);
		});
	},
}

export default {
  state,
  mutations,
  actions,
  getters,
}
