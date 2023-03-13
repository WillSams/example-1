const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test.  The Finale? Example-1 Application - Hello, world! Testing Argo & kube sync.');
});

server.listen(port, () => {
    console.log(`Deployment succesful. Port forwarded server running at http://localhost:${port}/`);
});
