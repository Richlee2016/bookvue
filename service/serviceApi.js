import getAxios from './getHttp'

//首页
var index = () => getAxios('GET', '/hs/v3/channel/418');

//搜索
var searchpage = () => getAxios('GET', '/api/searchpage');
var search = (start, count, s) => getAxios('GET', 'store/v0/lib/query/onebox', {
        start: start,
        count: count,
        s: s,
        source: '2,5'
    })
    //瀑布流接口
var pull = (start, count) => getAxios('POST', '/rock/book/recommend', {
    start: start,
    count: count
})

//banner接口
var banner = (id, data) => getAxios('GET', '/store/v0/fiction/list/' + id);
//获取更多
var getmore = (id) => getAxios('GET', '/hs/v3/channel/' + id);
var getfree = (id) => getAxios('GET', '/api/free');
//分类
var category = () => getAxios('GET', '/hs/v0/android/store/category');
//分类详情
var categoryFiction = (id, start, count, type = 'click') => getAxios('GET', `/store/v0/fiction/category/${id}?start=${start}&count=${count}&${type}=1`);
var categoryTitle = (id) => getAxios('GET', '/hs/v0/android/fiction/category/' + id);
var categoryTag = (name, start, count, type = 'click') => getAxios('GET', `/store/v0/fiction/tag?start=${start}&tag_name=${name}&count=${count}&${type}=1`)
    //排行
var ranks = () => getAxios('GET', '/store/v0/ad/ranks');
var ranksFiction = (start, count, r) => getAxios('GET', '/store/v0/fiction/rank', {
    start: start,
    count: count,
    r: r
});
//频道内页更多信息
var morefiction = (id, start, count) => getAxios('GET', '/store/v0/fiction/list/' + id, {
    start: start,
    count: count
});

//精选
var persistent = (start, count, type) => getAxios('GET', '/store/v0/ad/persistent', {
    start: start,
    count: count,
    type: type
});

//详情页
var detail = (id) => getAxios('GET', '/hs/v0/android/fiction/book/' + id);

//正文
var read = (id, chapter) => getAxios('POST', '/book/read', {
    id: id,
    chapter: chapter
})

//获取免费章节(爬取免费网页)
var freeChapter = (id) => getAxios('GET', '/api/chapter/' + id);
var freeRead = (id) => getAxios('GET', '/api/read/' + id);
var freeSearch = (name) => getAxios('POST', '/api/freeSearch', {
        name: name
    })
    //获取收费章节(免费章节没有的情况下)
var chapterCatalogue = (id) => getAxios('GET', `/store/v0/fiction/detail/${id}?chapter_id=0`);
export { index, searchpage, search, pull, banner, category, categoryFiction, categoryTitle, categoryTag, ranks, ranksFiction, morefiction, getmore, getfree, persistent, detail, read, freeChapter, freeRead, freeSearch, chapterCatalogue }