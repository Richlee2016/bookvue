import getAxios from './getHttp'

var index = () => getAxios('GET', '/hs/v3/channel/418');

var pull = (start, count) => getAxios('POST', '/rock/book/recommend', {
    start:start,
    count:count
})
export {index,pull}