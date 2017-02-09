var fs = require('fs');
var mockService =mockService||{};

mockService.get_chapter_data = () => {
  return fs.readFileSync('./mock/bookbody/chapter.json','utf-8');
};

mockService.get_read_data = (chapter) => {
  return fs.readFileSync('./mock/bookbody/data'+ chapter +'.json','utf-8');
};

module.exports = mockService;
