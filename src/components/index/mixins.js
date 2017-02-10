import util from 'assets/util'
const mixins ={
	data (){
		return {
			mainTransform:0
		}
	},
	methods:{
		cityGo (){
			let oMain = this.$refs.indexmain;
			let oLine = this.$refs.moveline;
			util.css3(oLine,'transform','translateX(0%)');
			util.css3(oMain,'transform','translateX(0)');
			util.css3(oMain,'transition','0.4s ease-in-out');
		},
		framGo (){
			let oMain = this.$refs.indexmain;
			let oLine = this.$refs.moveline;
			util.css3(oLine,'transform','translateX(100%)');
			util.css3(oMain,'transform','translateX(-50%)');
			util.css3(oMain,'transition','0.4s ease-in-out');
		}
	}
}


export default mixins;
