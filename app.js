const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Example-1 Application - Hello, world!\n');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://localhost:${port}/`);
});
