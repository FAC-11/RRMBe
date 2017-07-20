const handlers = require('./handlers.js');

const router = (request, response) => {
  const url = request.url;
  const fileName = {
    '/': '/index.html',
    '/index.html': '/index.html',
    '/style.css': '/style.css',
    '/index.js': '/index.js',
    '/request.js': '/request.js',
    '/binary.jpg': '/binary.jpg',
  }[url];

  if (fileName) {
    handlers.handleFile(request, response, fileName);
  } else if (url.indexOf('search') !== -1) {
    handlers.handleSearch(request, response);
  } else {
    handlers.handleOther(request, response);
  }
};

module.exports = router;
