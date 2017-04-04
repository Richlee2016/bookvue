// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var cookieSet = 'uLocale=zh_CN; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1489720605,1489996190,1490060009,1490144056; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1490144059; app_id=mi_wap; build=8888; device_id=D950FH275FLEFLJX; user_type=2; device_hash=76dc2d8d805f607f7e10f8596e06730a; user_id=1236127735; token=s4xOpaiEvnQH-8h_y541nhFPb6E-Nf3j_8ZBQDTS5gYkuzGxs5cko2iW-tJ9Mvl8';
module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 8082,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            context: [
                //首页
                '/hs/v3/channel/418',
                //瀑布流请求
                '/rock/book/recommend',
                //搜索页面
                '/store/v0/ad',
                //banner
                '/store/v0/fiction/list/',
                //频道更多
                '/hs/v3/channel/',
                //更多专题
                '/store/v0/ad/persistent',
                ////分类
                '/hs/v0/android/store/category',
               '/store/v0/fiction/category/',
               '/hs/v0/android/fiction/category/',
                //排行
                '/store/v0/ad/ranks',
                //详情
                '/hs/v0/android/fiction/book/',
                //搜索页面
                // '/store/v0/ad?key=df_search_tags&a=1',
                //搜索
                '/store/v0/lib/query/onebox'
            ],
            options: {
                target: 'http://dushu.xiaomi.com/',
                changeOrigin: true,
                onProxyReq: function(proxyReq, req, res) {
                    proxyReq.setHeader('Cookie', cookieSet);
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}