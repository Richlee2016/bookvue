const prefix = 'http://192.168.2.249:3000/api/';

var api = {
	//首页
	index:'index',
	//瀑布流
	pull:'ajax/pull',
	//搜索
	searc:'search',
	//banner 页面跳转
	moreone:'moreone',
	//频道更多,
	moretwo:'moretwo',
	//free更多,
	morethree:'morethree',
	//分类请求
	class:'class',
	//排行请求
	rank:'rank',
	//详情请求
	detail:'detail'
}

for(var key in api){
	api[key] = prefix + api[key];
};

export default api
