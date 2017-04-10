import Vue from 'vue'
import types from "types"
import { setGroup, chineseReg, myScroll } from "assets/util"
import defaultsDeep from 'lodash/defaultsDeep'
import { index, pull } from 'service/serviceApi'
const state = {
    bannerImg: {},
    weekHotData: {},
    recommend: {},
    girllike: {},
    boylike: {},
    timefree: {},
    special: {},
    //瀑布流
    pullbook: [],
    pullNum: 0,
    addNum: 4
}

const util = {
    changeGroup(arr, num) {
        let group = defaultsDeep({}, arr);
        if (group.data) {
            group.data.data = setGroup(group.data.data, { num: num });
        };
        return group;
    }
}

const getters = {
    bannerImg() {
        let group = defaultsDeep({}, state.bannerImg);
        if (group.data) {
            group.data.data = setGroup(group.data.data, 3, 5);
        };
        return group;
    },
    weekHotData() { return state.weekHotData },
    recommend() {
        let recommend = defaultsDeep({}, state.recommend);
        let arr = [];
        if (recommend.data) {
            arr = setGroup(recommend.data.data, { num: 6 });
            arr = arr.map((o) => setGroup(o, 1, 4));
            arr = setGroup(arr, { num: 2 });
            recommend.data.data = arr;
        };
        return recommend;
    },
    girllike() {
        return util.changeGroup(state.girllike, 3);
    },
    boylike() {
        return util.changeGroup(state.boylike, 3);
    },
    timefree() {
        let data = state.timefree;
        let arr = [];
        if (data.data) {
            arr = data.data.data.map((o) => {
                return {
                    title: o.ad_name,
                    cover: o.data.cover
                }
            });
        };
        return {
            ad_name: data.ad_name || "",
            data: arr,
            id: 371
        };
    },
    special() { return state.special },
    pullbook() {
        return state.pullbook.items || [];
    }
}

const mutations = {
    [types.GET_BOOKCITY](state, { bookcity }) {
        state.bannerImg = bookcity.items[0];
        state.weekHotData = bookcity.items[1];
        state.recommend = bookcity.items[2];
        state.girllike = bookcity.items[3];
        state.boylike = bookcity.items[4];
        state.timefree = bookcity.items[5];
        state.special = bookcity.items[6];
    },
    [types.GET_PULL_BOOK](state, { pullbook }) {
        // if (Object.keys(state.pullbook).length === 0) {
        //     state.pullbook = pullbook;
        // } else {
        //     state.pullbook.items = state.pullbook.items.concat(pullbook.items);
        //     state.pullbook.count += state.addNum;
        // };
        // state.pullNum += state.addNum;
        state.pullbook = pullbook;
    }
}

const actions = {
    [types.GET_BOOKCITY]({ commit }) {
        index().then(res => {
            commit(types.GET_BOOKCITY, { bookcity: res.data });
        })
    },
    getPullBook({ commit, state }, { pullBox }) {
        pull(0, 10).then(res => {
            commit(types.GET_PULL_BOOK, { pullbook: res.data });
            return Promise.resolve();
        });
        // var addBook = myScroll();
        // let getPull = () => {
        // 	pull(state.pullNum+1,state.addNum).then( res => {
        // 		commit(types.GET_PULL_BOOK,{pullbook:res.data});
        // 		return Promise.resolve();
        // 	}).then( res => {
        // 		addBook(pullBox, () => {
        // 			getPull();
        // 		},state.addNum*150);
        // 	})
        // }
        // getPull();
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
}