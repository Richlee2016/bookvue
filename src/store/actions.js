import Vue from 'vue'
import types from 'types'

const actions = {
	reloadDetail ({commit},{list}){
		axios.post("http://localhost:3000/api/detail",{list:list})
		.then( (res) => {
			if(res.status == 200){
				commit(types.DETAIL_PAGE,{detail:res.data},);
			};
		})
		.catch( (err) => {
			cosnole.log(err);
		})	
	}
}

export default actions
