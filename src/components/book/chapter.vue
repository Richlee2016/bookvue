<template>
	<div class="chapter-container">
		<v-head
  		:title="label"	
  			></v-head>
		<ul class="chapter-box">
			<li v-for="item in chapter" @click="read(item)">{{item.title}}</li>
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
				console.log(chapter.data.data.length);
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
				this.$overLoad();
			})
		},
		read(item){
			this.$router.push({path:'/book/'+ this.$route.params.id + '?chapter=' + item.chapter_id + '&price=' + item.price})
			// this.$router.push({path:'/book/'})
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
	}
}	
</style>
