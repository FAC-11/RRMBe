// two request handlers:
// 1. onload;
// 2. searches;

// 3. response.end --> sets headers;

const path = require('path');
const fs = require('fs');
const search = require('./search');

const handleFile = (request, response, fileName) => {
  console.log('url passed to handleFile: ', request.url);
  console.log('fileName passed to handleFile: ', fileName);
  const filePath = path.join(__dirname, '..', 'public', fileName);
  const extension = fileName.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
  };
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, 'Content-Type: text/html');
      response.end('Sorry, we\'ve had a problem');
    } else {
      response.writeHead(200, { 'Content-Type': extensionType[extension] });
      response.end(file);
    }
  });
};
// not yet tested (build front end)
const handleSearch = (request, response) => {
  const searchTerm = request.url.split('/')[2];
  const searchResult = search.passwordFilter(searchTerm);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(searchResult);
};

// needs to be written
const handleOther = (request, response) => {
  const extension = request.url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, 'Content-Type: text/html');
      response.end('<h1>Sorry</h1>');
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
};

module.exports = {
  handleFile,
  handleOther,
  handleSearch,
};
