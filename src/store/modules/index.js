import types from "types"
const state = {
	//所有数据
	bookCity:{},
	//热门推荐
	recommendGroup:[],
	recommendData:[],
	changeTime:0,
	//限时免费
	timeFreeData:{},
	//瀑布流
	pullBookData:{},
	//搜索页面
	searchpage:{},
	//containerData
	containerData:{}
}
const util = {
	setGroup (){
 		var	args =Array.prototype.slice.call(arguments),
 		obj = args.splice(0,1)[0],
 		type = args.slice(0,1)[0],
		len =args.length,
		extArr = [],
		arr =[],
		i = 0,
		j = 0;
		for(j;j<obj.length;j++){
			extArr[j] = obj[j];
		};
		var isObject = Object.prototype.toString.call(type) === "[object Object]"? true : false;
			if(isObject){
				var eva = Math.ceil(obj.length/type.num);
				while(i<type.num-1){
					arr.push(extArr.splice(0,eva));
					i++;
				};
				arr.push(extArr.splice(0,eva));
			}else{
				while(args[i]){
					arr.push(extArr.splice(0,args[i]));
					i++;
				};
			}
		return arr;
	},
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
				data:o.data.data,
				id:o.reference_id
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
			let group =util.setGroup(o.data.data,3,5);
			return {
				one:group[0],
				two:group[1]
			}
		});
	},
	recommend (){
		return util.setData(2,(o) => {
			let arr = util.setGroup(state.recommendGroup,{num:3});
			let group = util.setGroup(arr[state.changeTime],1,4);
			return {
				title:o.ad_name,
				one:group[0],
				two:group[1]
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
	containerPage (){
		return state.containerData;
	}
}

const mutations = {
	[types.GET_BOOKCITY] (state, {bookcity}){
		state.bookCity = bookcity;
		state.timeFreeData=bookcity.items[5];
		state.recommendGroup =util.setGroup(state.bookCity.items[2].data.data,{num:2})[0]; 
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
	//recommend 操作
	[types.RECOMMEND_CHANGE] (state){
		state.changeTime++;
		state.changeTime = state.changeTime%3;d
	},
	[types.RECOMMEND_TAB] (state,{tab}){
		state.changeTime = 0;
		state.recommendGroup =util.setGroup(state.bookCity.items[2].data.data,{num:2})[tab]; 
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
	[types.ID_JUMP] ({commit},{list}){
		axios.post("http://localhost:3000/api/banner",{start:0,count:10,list:list})
		.then( (res) => {
			
			if(res.status == 200){
				commit(types.ID_JUMP,{data:res.data},);
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
