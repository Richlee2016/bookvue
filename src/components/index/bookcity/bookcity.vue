<template>
  <div class="bookcity" ref="cityscroll">
    <section>

      <!--banner-->
      <v-banner :data="bannerImg"></v-banner>

      <!--本周最热-->
      <div class="clear-line"></div>
      <v-weekhot :data="weekHotData"></v-weekhot>

      <!--重磅推荐-->
      <div class="clear-line"></div>
      <v-recommend :data="recommend"></v-recommend>

      <!--女生最爱-->
      <div class="clear-line"></div>
      <v-girllike :data="girllike"></v-girllike>

      <!--男生最爱-->
      <div class="clear-line"></div>
      <v-boylike :data="boyllike"></v-boylike>

      <!--限时免费-->
      <div class="clear-line"></div>
      <v-timefree :data="timeFree"></v-timefree>

      <!--精选专题-->
      <div class="clear-line"></div>
      <v-specialone :data="special"></v-specialone>

      <!--瀑布流-->
      <div class="clear-line"></div>
      <v-pullbook :data="pullData"></v-pullbook>
    </section>
  </div>
</template>

<script>
  import types from "types"
  import {
    mapGetters
  } from 'vuex'
  import Banner from 'components/index/bookcity/banner'
  import weekHot from 'components/index/bookcity/weekhot'
  import Recommend from 'components/index/bookcity/recommend'
  import girlLike from 'components/index/bookcity/girllike'
  import boyLike from 'components/index/bookcity/boylike'
  import timeFree from 'components/index/bookcity/timefree'
  import specialOne from 'components/index/bookcity/specialone'
  import pullBook from 'components/index/bookcity/pullbook'
  export default {
    components: {
      "v-banner": Banner,
      "v-weekhot": weekHot,
      "v-recommend": Recommend,
      "v-girllike": girlLike,
      "v-boylike": boyLike,
      "v-timefree": timeFree,
      "v-specialone": specialOne,
      "v-pullbook": pullBook,
    },
    methods: {
      pullscroll (){
          console.log(this.$refs.cityscroll);
          let scroll = new BScroll(this.$refs.cityscroll, {})
      }
    },
    data() {
      return {
        img: "",
      }
    },
    computed: {
      ...mapGetters({
        weekHotData: "weekHotData",
        bannerImg: "bannerImg",
        recommend: "recommend",
        girllike: "girllike",
        boyllike: "boyllike",
        timeFree: "timeFree",
        special: "special",
        pullData: "pullData"
      })
    },
    created() {
      this.$nextTick(() => {
        this.$store.dispatch(types.GET_BOOKCITY);
        this.$store.dispatch('getPullBook',{pullBox:this.$refs.cityscroll});
      });
    }
  }
</script>
