<template>
  <div class="book" @touchmove="navHide">
  	<div class="book-top" v-show="navOnOff">
  		<section>
	  		<div class="back">
		  		<span class="icon-rback"></span>
		  		<label>返回书架</label>
	  		</div>
  		</section>
  	</div>
  	<div class="book-main" @click="navOnOff = !navOnOff"  :class="bodyBd">
	  	<h4>请根据上制作过程</h4>
	  	<ul class="book-body">
	  		<li v-for="n in 20">请根据上制作过程，认真思考并完成下边栏的结构和样式。请根据上边栏制作过程，认真思考并完成下边栏的结构和样式。请根据上边栏制作过程，认真思考并完成下边栏的结构和样式。</li>
	  	</ul>
  	</div>
  	<transition name="slide-fade">
	  		<div v-show="fontShow" class="fontChoice">
	  			<div class="fontbox01">
	  				
	  			</div>
	  			<div class="fontbox02">
	  				<label></label>
	  				<span v-for="{n,index} in 5">
	  					<font></font>
	  				</span>
	  		</div>
		</transition>
  	<ul class="book-bottom" v-show="navOnOff">
  		<li>
  			<div>
	  			<span class="icon-rmenu1"></span>
	  			<p>目录</p>
  			</div>
  		</li>
  		<li>
  			<div @click="fontShow = !fontShow">
	  			<span class="icon-rfont" :class="{'fontcolor':fontShow}"></span>
	  			<p>字体</p>
  			</div>
  		</li>
  		<li>
  			<div @click="dayChange">
  				<span v-show="dayNight">
		  			<label class="icon-rmoon"></label>
		  			<p>夜晚</p>
  				</span>
  				<span v-show="!dayNight">
		  			<label class="icon-rsun"></label>
		  			<p>白天</p>
  				</span>
  			</div>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
	data (){
		return {
			navOnOff:false,
			dayNight:true,
			fontShow:false,
			bodyBd:"bookbd01",
			oldBd:"bookbd01"
		}
	},
	methods:{
		navHide (){
			if( this.navOnOff ){
				this.navOnOff = false;
			};
		},
		dayChange (){
			if(this.dayNight){
				this.bodyBd = "bookbd05";
			}else{
				this.bodyBd = this.oldBd;
			};
			this.dayNight = !this.dayNight;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import './book.scss';
</style>
