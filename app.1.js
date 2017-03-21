const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const koaproxy = require('koa-proxy')
app.use(require('koa-static')(__dirname + '/dist'));
app.use(views(__dirname + '/dist', {
    map: { html: 'ejs' }
}));
//proxy
app.use(koaproxy({
  host: 'http://dushu.xiaomi.com/'
}));
//router
var index =router.get('/', async function(ctx, next) {
                await ctx.render('index', { title: 'rich的读书小屋' });
            })

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx) {
    console.log(err)
    logger.error('server error', err, ctx);
});

app.listen(8080)