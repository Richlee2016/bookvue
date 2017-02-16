import types from "types"
const state = {
	//所有数据
	bookCity:{},
	//本周最火
	weekHotData:{}
}
const util = {
	twoGroup (data,a,b){
		let one = [];
		let two = [];
		for(let i=0; i<a; i++){
			one[i] = data[i]
		};
		for(let j=a; j<a+b; j++){
			two[j-a] = data[j];
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
	}
}


const getters ={
	weekHotData (){
		var a = util.getBlock(1)
		return a;
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
			console.log(group.one);
			return {
				title:o.ad_name,
				one:group.one,
				two:group.two
			}
		});
	}
}

const mutations = {
	[types.GET_BOOKCITY] (state, {bookcity}){
		state.bookCity = bookcity;
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
	}
}

export default {
  state,
  mutations,
  actions,
  getters,
}
