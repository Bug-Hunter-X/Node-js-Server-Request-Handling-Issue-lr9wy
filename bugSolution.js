const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received:', req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});