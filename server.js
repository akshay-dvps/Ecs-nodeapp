var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Sample node application cicd testing!');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
