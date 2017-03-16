<template>
  <div class="banner-city">
    <div class="city-search" @click="search">
      <v-search></v-search>
    </div>
    <div class="city-scroll">
      <v-swiper :slider="banner">
        <div slot="box" class="city-banner" v-for="item in data.data?data.data.data[0] : []">
          <router-link :to="{path: '/banner/' + item.reference_id }">
            <img :src="item.ad_pic_url" />
          </router-link>
        </div>
      </v-swiper>
    </div>
    <!--导航-->
    <ul class="city-nav">
      <li v-for="(item,index) in navArr" @click="navGo(index,item.id)">
        <span :class="item.icon"></span> 
        <label>{{item.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  import types from 'types'
  import richSwiper from 'components/common/richSwiper'
  import Search from 'components/common/search'
  export default {
    components: {
      //搜索
      "v-search": Search,
      //滑动
      "v-swiper": richSwiper,
    },
    data() {
      return {
        banner: {
          swiper: false,
          box: 3,
          autoplay: 4,
        },
        navArr: [{
            icon: "c-free",
            name: "免费",
            id: 371
          },
          {
            icon: "c-girl",
            name: "女生",
            id: 370
          },
          {
            icon: "c-boy",
            name: "男生",
            id: 369
          },
          {
            icon: "c-classfy",
            name: "分类"
          },
          {
            icon: "c-rank",
            name: "排行"
          }
        ],
      }
    },
    props: {
      data: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    methods: {
      ...mapActions({
        search: types.GET_SEARCH_PAGE
      }),
      navGo(i, id) {
        if (i >= 0 && i <= 2) {
          this.$router.push({path: '/containertwo/'+id})
        } else if (i == 3) {
          this.$router.push({
            path: 'classcontainer'
          });
        } else if (i == 4) {
          this.$router.push({
            path: 'rankcontainer'
          })
        };
      }
    }
  }
</script>
