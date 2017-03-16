import types from "types"
import {setGroup,chineseReg,myScroll} from "assets/util"
import requestApi from "assets/requestapi"
import {index,pull} from 'service/serviceApi'
const state = {
	//所有数据
	bookCity:{},
	//热门推荐
	changeTime:0,
	//限时免费
	timeFreeData:{},
	//瀑布流
	pullBookData:[],
	pullNum:8
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
					cover:o.data.cover
				}
			});
		};
		return {
			title:data.ad_name || "",
			data:arr,
			id:371
		};
	},
	special (){
		var res = util.getBlock(6)
		return res;
	},
	pullData (){
		return state.pullBookData.items || [];
	}
}

const mutations = {
	[types.GET_BOOKCITY] (state, {bookcity}){
		state.bookCity = bookcity;
		state.timeFreeData=bookcity.items[5];
	},
	[types.GET_PULL_BOOK] (state, {pullbook}){
		state.pullBookData = pullbook;
		state.pullNum+=8;
	}
}

const actions = {
	[types.GET_BOOKCITY] ({commit}){
		index().then( res => {
			commit(types.GET_BOOKCITY,{bookcity:res.data});
		})	
	},
	getPullBook ({commit, state}, {pullBox}){
		var addBook = myScroll();
		let getPull = () => {
			pull(0,state.pullNum).then( res => {
				commit(types.GET_PULL_BOOK,{pullbook:res.data});
				return Promise.resolve();
			}).then( res => {
				addBook(pullBox, () => {
					getPull();
				},8*160);
			})
		}
		getPull();
	}
}
export default {
  state,
  mutations,
  actions,
  getters,
}
