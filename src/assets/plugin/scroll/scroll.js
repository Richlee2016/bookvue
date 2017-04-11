import Vue from 'vue'
import IScroll from 'iscroll'
import vScroll from './vscroll'
export default {
    install(Vue) {

        // 3. 注入全局组件
        Vue.mixin({
            components: {
                "v-scroll": vScroll
            }
        })

        //注册指令
        Vue.directive("rScroll", {
            bind(el) {
                //DOM结构调整
                // el.style.height = document.documentElement.clientHeight - 44 + 'px';
                // el.style.overflow = 'hidden';
                //开启方法
                Vue.prototype.scrollGo = (function() {
                    return function() {
                        var scroll = new IScroll(el, { click: true });
                    };
                })();
            },
            update(el, binding, vnode) {
                // console.log(el);
                // console.log(binding);
                // console.log(vnode);
            },
            componentUpdated(el) {
                // console.log(el);
            }
        })
    }
}