var http = require('http');
var url = require('url');

// 定义路由参数
function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        //在路由参数中把pathname给route函数
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;