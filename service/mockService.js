var fs = require('fs');
var superagent = require('superagent');
var mockService =mockService||{};

mockService.get_chapter_data = () => {
  return fs.readFileSync('./mock/bookbody/chapter.json','utf-8');
};

mockService.get_read_data = (chapter) => {
  return data = fs.readFileSync('./mock/bookbody/data'+ chapter +'.json','utf-8')
};

mockService.get_index_data = (chapter) => {
  return data = fs.readFileSync('./mock/home.json','utf-8')
};




module.exports = mockService;
//var reg = /[']([\w\W]+)[']/g;
//var readBook = reg.exec(read.text);
//new Buffer(readBook[1], 'base64').toString()
