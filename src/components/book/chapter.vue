<template>
	<div class="chapter-container">
		<v-head
  		:title="label"	
  			></v-head>
		<ul class="chapter-box">
			<li v-for="item in chapter" @click="read(item)">
				<label>{{item.title}}</label>
				<span class="isfree" v-show="Number(item.price) === 0">免费</span>
			</li>
		</ul>
	</div>
</template>

<script>
import bookHead from 'components/common/bookHead'
import { freeChapter, chapterCatalogue} from 'service/serviceApi'
export default {
	data(){
		return {
			label:"",
			chapter:[]
		}
	},
	components :{
		"v-head":bookHead,
	},
	methods:{
		async _getChapter(){
			let chapter;
			try {
				chapter = await freeChapter('一念永恒');
				if(chapter.data.data.length > 0){
					this.chapter = chapter.data.data;
				}else{
					// chapter = await 
					console.log('收费');
				};
			} catch (error) {
				console.log(error);
			}
			this.$overLoad();
		},
		_getChapterCatalogue(){
			chapterCatalogue(this.$route.params.id)
			.then(res => {
				this.chapter = res.data.item.toc;
				//把免费章节存到 localstore
				let freeChapter = this.chapter.filter(o => {
					return o.free;
				}).map(o => {
					return o.chapter_id;
				})
				this.$overLoad();
			})
		},
		read(item){
			this.$router.push({path:'/book/'+ this.$route.params.id + '?chapter=' + item.chapter_id})
		}
	},
	mounted(){
		this._getChapterCatalogue();
		// this.label = '一念永恒';
		// this._getChapter();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.chapter-box{
	width: 100%;
	li{
		line-height: 40px;
		padding:0 20px;
		border-top: #efeff0 1px solid;
		.isfree{
			float: right;
			color: #6cb378;
		}
	}
}	
</style>
