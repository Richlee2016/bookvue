import Vue from 'vue'
import loading from './vLoading'
import _throttle from 'lodash/throttle'
import _once from 'lodash/once'
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
            },
            data() {
                return {
                    isLoading: false
                }
            },
            methods: {
                _isLoading() {
                    // this.isLoading = true;
                }
            }
        })

        Vue.prototype.$inLoading = function() {
            // console.log(this.isLoading);
            // this.$set(this.$data, 'isLoading', true);
            // // this.isLoading = true;
            // console.log(this.isLoading);
        }

        // Vue.prototype.$outLoading = () => {
        //     console.log(1);
        // }

        //加载方法
        Vue.prototype.$rLoading = function(cb) {
            let updatePosition = () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let docHei = document.documentElement.offsetHeight || document.body.offsetTop;
                let disY = docHei - window.screen.height - 90;
                if (scrollTop >= disY) {
                    window.removeEventListener('scroll', updatePosition);
                    loadPomise(cb)
                        .then(res => {
                            if (res) {
                                window.addEventListener('scroll', updatePosition, false);
                            };
                        })
                };
            }
            window.addEventListener('scroll', updatePosition, false);
        };
    }
}