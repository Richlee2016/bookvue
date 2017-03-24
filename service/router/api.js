const router = require('koa-router')();
const require = requrei('require-promise');
var cookieSet = 'uLocale=zh_CN; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1489720605,1489996190,1490060009,1490144056; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1490144059; app_id=mi_wap; build=8888; device_id=D950FH275FLEFLJX; user_type=2; device_hash=76dc2d8d805f607f7e10f8596e06730a; user_id=1236127735; token=s4xOpaiEvnQH-8h_y541nhFPb6E-Nf3j_8ZBQDTS5gYkuzGxs5cko2iW-tJ9Mvl8';
app.get('/free', async function() {
    var freeSet = {
        uri: 'http://dushu.xiaomi.com/hs/v3/channel/371',
        headers: { 'Cookie': cookieSet },
        json: true
    }
    var result = await request(freeSet)
        .then(result => {
            ctx.body = result;
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;