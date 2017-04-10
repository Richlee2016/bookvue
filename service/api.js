var request = require('request-promise');
var cookieSet = 'uLocale=zh_CN; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1489720605,1489996190,1490060009,1490144056; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1490144059; app_id=mi_wap; build=8888; device_id=D950FH275FLEFLJX; user_type=2; device_hash=76dc2d8d805f607f7e10f8596e06730a; user_id=1236127735; token=s4xOpaiEvnQH-8h_y541nhFPb6E-Nf3j_8ZBQDTS5gYkuzGxs5cko2iW-tJ9Mvl8';
// var cookiego = 'uLocale=zh_CN; app_id=mi_wap; build=8888; device_id=D950FH275FLEFLJX; user_type=2; device_hash=76dc2d8d805f607f7e10f8596e06730a; user_id=1236127735; token=s4xOpaiEvnQH-8h_y541nhFPb6E-Nf3j_8ZBQDTS5gYkuzGxs5cko2iW-tJ9Mvl8; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1489632936,1489720605,1489996190,1490060009; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1490077093';
exports.read = function(req, res) {
    var query = req.query;
    var id = req.body.id;
    var chapter = req.body.chapter;
    var geturl = `http://dushu.xiaomi.com/drm/v0/fiction/link?fiction_id=${id}&chapter_id=${chapter}&format=jsonp`;
    var options = {
        method: 'GET',
        uri: geturl,
        headers: { 'Cookie': cookieSet },
        json: true
    }
    request(options)
        .then(body => {
            request(body.url)
                .then(text => {
                    var reg = /\'(.*)\'/g;
                    var txt = reg.exec(text);
                    var result = new Buffer(txt[1], 'base64').toString()
                    res.json({ txt: result })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.free = function(req, res) {
    var freeSet = {
        uri: 'http://dushu.xiaomi.com/hs/v3/channel/371',
        headers: { 'Cookie': cookieSet },
        json: true
    }
    request(freeSet)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
}

exports.searchpage = function(req, res) {
    var freeSet = {
        uri: 'http://dushu.xiaomi.com/store/v0/ad?key=df_search_tags&a=1',
        headers: { 'Cookie': cookieSet },
        json: true
    }
    request(freeSet)
        .then(result => {
            res.json({ msg: result })
        })
        .catch(err => {
            console.log(err);
        })
}