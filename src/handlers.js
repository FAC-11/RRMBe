// two request handlers:
// 1. onload;
// 2. searches;

// 3. response.end --> sets headers;

const path = require('path');
const fs = require('fs');
const search = require('./search');

const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, 'Content-Type: text/html');
      response.end("Sorry, we've had a problem");
    } else {
      response.writeHead(200, 'Content-Type: text/html');
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
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

const handleSearch = (request, response, url) => {
  const extension = url.split('.')[1];
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

const handleOther = (request, response, url) => {
  const extension = url.split('.')[1];
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
  handlePublic,
  handleHomeRoute,
  handleOther,
  handleSearch,
};
