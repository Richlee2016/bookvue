//css3 转化
const css3 = function(obj,m,n){
	var one = m.toLowerCase(); 
	obj.style['Webkit' + m] = n;//Webkit(Chrome/Safari)
	obj.style['Moz' + m] = n;  //Gecko(Firefox)
	obj.style['o' + m] = n;   //-o-transform opare
	obj.style['ms' + m] = n;  //IE
	obj.style[one] = n; 
};
//数组分组		
const setGroup = function(){
	var	args =Array.prototype.slice.call(arguments),
		obj = args.splice(0,1)[0],
		type = args.slice(0,1)[0],
		len =args.length,
		extArr = [],
		arr =[],
		i = 0,
		j = 0;
	for(j;j<obj.length;j++){
		extArr[j] = obj[j];
	};
	var isObject = Object.prototype.toString.call(type) === "[object Object]"? true : false;
		if(isObject){
			var eva = Math.ceil(obj.length/type.num);
			while(i<type.num-1){
				arr.push(extArr.splice(0,eva));
				i++;
			};
			arr.push(extArr.splice(0,eva));
		}else{
			while(args[i]){
				arr.push(extArr.splice(0,args[i]));
				i++;
			};
		}
	return arr;
}		
//解析标题正则	
const chineseReg = /([\u4e00-\u9fa5]+)/g;	
//解析more 标题类容正则
//const moreTitleReg 
//get 请求
const axiosGet = (url,cb) => {
	axios.get(url)
	.then( (res) => {
		if(res.status == 200){
			cb&&cb(res);
		};
	})
	.catch( (err) => {
		console.log(err);
	});
}
//post 请求
const axiosPost = (url,pstdata,cb) => {
	axios.post(url,pstdata)
	.then( (res) => {
		if(res.status == 200){
			cb&cb(res);
		};
	})
	.catch( (err) => {
		console.log(err);
	});
}
export {
	css3,
	setGroup,
	chineseReg,
	axiosGet,
	axiosPost
}
