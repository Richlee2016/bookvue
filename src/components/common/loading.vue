<template>
	<div>
		<div class="loadone" title="7">
		<div class="svg">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
			<rect x="0" y="10" width="4" height="10" fill="#FF6700" opacity="0.2">
			<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
			</rect>
			<rect x="8" y="10" width="4" height="10" fill="#FF6700"  opacity="0.2">
			<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
			</rect>
			<rect x="16" y="10" width="4" height="10" fill="#FF6700"  opacity="0.2">
			<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
			<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
			</rect>
			</svg>
		</div>	
		<span>{{loadMsg}}</span>
		</div>	
	</div>
</template>

<script>
import _throttle from 'lodash/throttle'
import $ from 'assets/zepto'
export default {
	props:{
		loadMsg:{
			type:String,
			default:'正在加载书籍...'
		},
		goload:{
			type:Boolean,
			default:false
		}
	},
	methods:{
		_loadPomise(cb){
			return new Promise((resolve, reject) => {
				cb && cb(resolve);
			});
		},
		_loading(cb){
			cb && cb(function() {});
            let updatePosition = () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let docHei = document.querySelector('.view-container').offsetHeight;
                let disY = docHei - window.screen.height - 90;
                if (scrollTop >= disY) {
                    $(window).off('scroll');
                    this._loadPomise(cb)
                        .then(res => {
                            if (res) {
                                $(window).on('scroll', _throttle(updatePosition, 500));
                            };
                        })
                };
            }
            //throttle 节流绑定
            $(window).on('scroll', _throttle(updatePosition, 500));
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.loadone{
	padding: 30px 0px;
	height: 30px;
	text-align: center;
	display: -webkit-flex;
	justify-content:center ;
	.svg{
		width: 24px;
		height: 30px;
	}
	span{
		color: rgba(0,0,0,0.4);
		line-height: 30px;
	}
}
.loadtwo{
	z-index: 100000;
	position: fixed;
	left:0px;
	top: 0px;
	bottom:0px;
	right:0px;
	background: rgba(255,255,255,0.8);
}
</style>
