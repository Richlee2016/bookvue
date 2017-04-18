import Vue from 'vue'
import loading from './vLoading'
import _throttle from 'lodash/throttle'
import $ from 'assets/zepto'

//回调函数 promise 通知
let loadPomise = (cb) => {
    return new Promise((resolve, reject) => {
        cb && cb(resolve);
    });
};
export default {
    install(Vue) {
        //引入 全局加载组件
        Vue.mixin({
            components: {
                "r-loading": loading
            }
        })

        //加载方法
        Vue.prototype.$onLoading = function(cb) {
            console.log("on");
            cb && cb(function() {});
            let updatePosition = () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let docHei = document.querySelector('.view-container').offsetHeight;
                let disY = docHei - window.screen.height - 90;
                if (scrollTop >= disY) {
                    $(window).off('scroll');
                    loadPomise(cb)
                        .then(res => {
                            if (res) {
                                $(window).on('scroll', _throttle(updatePosition, 500));
                            };
                        })
                };
            }

            //throttle 节流绑定
            $(window).on('scroll', _throttle(updatePosition, 500));
        };
        //移除 window scroll 监听
        Vue.prototype.$offLoading = function() {
            $(window).off('scroll');
        }

        //切换loading完成取消
        Vue.prototype.$overLoad = function() {
            if (this.$parent) {
                this.$parent.fade = false;
            };
            if (this.$parent.$parent) {
                this.$parent.$parent.fade = false;
            };
        }

        //切换loading完成取消
        Vue.prototype.$letLoad = function() {
            console.log(this.$parent);
            if (this.$parent) {
                this.$parent.fade = true;
            };
            if (this.$parent.$parent) {
                this.$parent.$parent.fade = true;
            };

        }
    }
}