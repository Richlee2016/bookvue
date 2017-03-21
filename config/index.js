// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

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
      context:[
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
        changeOrigin: true
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
