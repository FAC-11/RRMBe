const handler = require('./handlers.js');

const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    handler.handleHomeRoute(req, res);
  } else if (url.indexOf('public') !== -1) {
    handler.handlePublic(req, res);
  } else if (url.indexOf('search') !== -1) {
    handler.handleSearch(req, res);
  } else {
    handler.handleOther(req, res);
  }
};

module.exports = router;
