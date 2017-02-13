import types from "types"
const state = {
	//所有数据
	bookCity:{},
	//本周最火
	weekHotData:{}
}
const util = {
	twoGroup (data){
		let one = [];
		let two = [];
		for(let i=0; i<3; i++){
			one[i] = data[i]
		};
		for(let j=3; j<6; j++){
			two[j-3] = data[j];
			console.log(j);
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
		let res = {}
		if(data[1]){
			var group = util.twoGroup(data[1].data.data);
			console.log(data[1].data.data);
			res = {
				title:data[1].ad_name,
				data:data[1].data.data,
				one:group.one,
				two:group.two
			}
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
		axios.get("http://localhost:3000/api/home")
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
