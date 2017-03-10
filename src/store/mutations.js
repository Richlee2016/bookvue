import Vue from 'vue'
import types from 'types'

var mutaions = {
	[types.DETAIL_PAGE] (state, {detail}){
		state.book.detail = detail;
	}
}

export default mutaions