const http = require('http');
const router = require('./router');
const search = require('./search');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router);

// server.listen(port, () => {
//   search.loadArray();
// });
server.listen(port);

console.log(`server running on: http://${host}:${port}`);
