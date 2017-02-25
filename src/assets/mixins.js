import {css3} from 'assets/util'
//css3动画操作(暂时)
const translate ={
	data (){
		return {
			mainTransform:0
		}
	},
	methods:{
		cityGo (){
			let oMain = this.$refs.indexmain;
			let oLine = this.$refs.moveline;
			css3(oLine,'transform','translateX(0%)');
			css3(oMain,'transform','translateX(0)');
			css3(oMain,'transition','0.4s ease-in-out');
		},
		framGo (){
			let oMain = this.$refs.indexmain;
			let oLine = this.$refs.moveline;
			css3(oLine,'transform','translateX(100%)');
			css3(oMain,'transform','translateX(-50%)');
			css3(oMain,'transition','0.4s ease-in-out');
		}
	}
}

//换一换
const change = {
	data (){
		return {
			num:0
		}
	},
	methods :{
		onemore (){
			this.num++;
			this.num = this.num%3;
		}
	}
}

export {translate,change};
