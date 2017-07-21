// two request handlers:
// 1. onload;
// 2. searches;

// 3. response.end --> sets headers;

const path = require('path');
const fs = require('fs');
const search = require('./search');

const handleFile = (request, response, fileName) => {
  const filePath = path.join(__dirname, '..', 'public', fileName);
  const extension = fileName.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
  };
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('Sorry, we\'ve had a problem');
    } else {
      response.writeHead(200, { 'Content-Type': extensionType[extension] });
      response.end(file);
    }
  });
};
// not yet tested (build front end)
const handleSearch = (request, response) => {
  const reg = /\/search\//;
  const searchTerm = decodeURIComponent(request.url.replace(reg, ''));
  const searchResult = search.getPasswords(searchTerm);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(searchResult);
};

const handleOther = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.end('Sorry, not found');
};

module.exports = {
  handleFile,
  handleOther,
  handleSearch,
};
