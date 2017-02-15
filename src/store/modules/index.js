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
	}
}
const getters ={
	weekHotData (){
		let data = state.bookCity.items || [];
		let res = {};
		if(data[1]){
			var group = util.twoGroup(data[1].data.data,3,3);
			res = {
				title:data[1].ad_name,
				data:data[1].data.data,
				one:group.one,
				two:group.two
			}
		};
		return res;
	},
	bannerImg (){
		let data = state.bookCity.items || [];
		let res = {};
		if(data[0]){
			let group =util.twoGroup(data[0].data.data,3,5)
			res ={
				one:group.one,
				two:group.two
			};
		};
		return res;
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
