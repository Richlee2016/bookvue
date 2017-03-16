import getAxios from './getHttp'

var index = () => getAxios('GET', '/hs/v3/channel/418');

var pull = (start, count) => getAxios('POST', '/rock/book/recommend', {
    start:start,
    count:count
})
var search = (id) => getAxios('GET', '/store/v0/fiction/list/'+id);

var getmore = (id) =>  getAxios('GET', '/hs/v3/channel/'+id);

export {index,pull,search,getmore}