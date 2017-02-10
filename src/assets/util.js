var css3 =(obj,m,n) => {
			var one = m.toLowerCase(); 
			obj.style['Webkit' + m] = n;//Webkit(Chrome/Safari)
			obj.style['Moz' + m] = n;  //Gecko(Firefox)
			obj.style['o' + m] = n;   //-o-transform opare
			obj.style['ms' + m] = n;  //IE
			obj.style[one] = n; 
		};
export default {
	css3
}
