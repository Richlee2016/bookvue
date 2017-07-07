<template>
  <div 
  	class="book" 
  	@touchmove="navHide"  
  	:class="bodyBd">
  	<div class="book-top" v-show="navOnOff">
  		<section>
	  		<div class="back" @click="$router.goback();">
		  		<span class="icon-rback"></span>
		  		<label>返回书架</label>
	  		</div>
  		</section>
  	</div>
  	<div class="book-main" @click="navOnOff = !navOnOff;fontShow = false;">
		  <div v-if="isfree">
				<h4>{{bookcontainer.t}}</h4>
				<ul class="book-body">
					<li v-for="text in bookcontainer.p" :style="{fontSize:fontSize + 'px',lineHeight:fontSize + 20 + 'px'}">{{text}}</li>
				</ul>
				<div class="nextChapter">
					<span :style="{color:Number($route.query.chapter) === 0?'#999' :'initial' }" class="prev" @click.stop="prevPage">上一章</span>
					<span class="next" @click.stop="nextPage">下一章</span>	
				</div>
		  </div>
		<div class="book-main-none" v-else>这Tm的不是免费</div>
  	</div>
  	<transition name="slide-fade">
	  		<div v-show="fontShow" class="fontChoice">
	  			<div class="fontbox01">
	  				<label>字号</label>
	  				<span @click="fontBig">大</span>
	  				<span @click="fontSmall">小</span>
	  			</div>
	  			<div class="fontbox02">
	  				<label>背景</label>
	  				<span v-for="(n,i) in 6" @click="getBodyBd(i)" :class="{'active':borderOnOff[i]}">
	  					<a :class="'bookbd0'+i"></a>
	  				</span>
	  		</div>
		</transition>
  	<ul class="book-bottom" v-show="navOnOff">
  		<li>
  			<div class="catagrolBox">
				<router-link :to="{path:'/chapter/'+$route.params.id}">
					<span class="icon-rmenu1"></span>
					<p>目录</p>
				</router-link>
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
import {read, chapterCatalogue} from 'service/serviceApi'
export default {
	data (){
		return {
			navOnOff:false,
			dayNight:false,
			fontShow:false,
			bodyBd:"bookbd01",
			oldBd:"bookbd01",
			fontBorderIndex:1,
			fontSize:16,
			bookcontainer:{},
			isfree:true
		}
	},
	computed:{
		borderOnOff (){
			let onOff = [];
			for (let i = 0; i < 6; i++) {
				onOff.push(false);
			}
			onOff[this.fontBorderIndex] = true;
			return onOff;
		}
	},
	watch :{
		'$route' (to, from){
			this.readBood();
		}
	},
	methods:{
		navHide (){
			if( this.navOnOff ){
				this.navOnOff = false;
				this.fontShow = false;
			};
		},
		dayChange (){
			if(this.dayNight){
				this.fontBorderIndex = 5;
				this.bodyBd = this.oldBd;
			}else{
				this.bodyBd = "bookbd05";
				this.fontBorderIndex = 1;
			};
			this.dayNight = !this.dayNight;
		},
		getBodyBd (i){
			this.bodyBd = "bookbd0" + i;
			this.fontBorderIndex = i;
			console.log(i);
			switch ( i ){
				case 5 :
					this.dayNight = true;
				break;
				case 2 :
					this.dayNight = true;
				break;	
			}
		},
		fontBig (){
			this.fontSize++;
			if(this.fontSize > 24){
				this.fontSize = 24;
			};
		},
		fontSmall (){
			this.fontSize--;
			if(this.fontSize < 12){
				this.fontSize = 12;
			};
		},
		prevPage(){
			if(this.$route.query.chapter ==! 0){
				this.$router.push({
					path:'/book/'+ this.$route.params.id,
					query:{chapter:Number(this.$route.query.chapter) - 1}
					});
			}
		},
		nextPage(){
			this.$router.push({
				path:'/book/'+ this.$route.params.id,
				query:{chapter:Number(this.$route.query.chapter) + 1}
				});
		},
		async readBood(){
			let free = await chapterCatalogue(this.$route.params.id);
			let chapter = free.data.item.toc;
			let freeChapter = chapter.filter(o => {
					return o.free;
				}).map(o => {
					return o.chapter_id;
				})
			if(freeChapter.indexOf(Number(this.$route.query.chapter)) !== -1){
				this._getRead();
			}else{
				this.isfree = false;
				this.$overLoad();
			};
		},
		_getRead(){
			read(this.$route.params.id,this.$route.query.chapter)
			.then( res => {
			this.bookcontainer = JSON.parse(res.data.txt);
			if(!res.data.txt){
				this.isfree = false;
			};
				return Promise.resolve();
			})
			.then(() => {
				this.$overLoad();
			})
			.catch( err => {
				console.log(err)
			})
		}
	},
	mounted (){
		this.readBood();
		// let free =await this.getChapter();
		// console.log(free);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import './book.scss';
</style>
