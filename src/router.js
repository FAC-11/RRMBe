const handlers = require('./handlers.js');

const router = (req, res) => {
  const url = req.url;

  const whitelist = {
    '/': '/index.html',
    '/index.html': '/index.html',
    '/style.css': '/style.css',
    '/index.js': '/index.js',
    '/request.js': '/request.js',
  }[url];

  if (whitelist) {
    handlers.handleFile(req, res);
  } else if (url.indexOf('search') !== -1) {
    handlers.handleSearch(req, res);
  } else {
    handlers.handleOther(req, res);
  }
};

module.exports = router;
