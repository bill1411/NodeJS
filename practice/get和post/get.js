var http = require('http')
var util = require('util')
var url = require('url')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plan;charset=utf-8'})
    
    res.write('welcome to my website');
    res.write('\n');

    //获取URL参数
    var params = url.parse(req.url, true).query;
    res.write('网站名字是：' + params.name);
    res.write('\n');
    res.write('网站URL：' + params.url);
    res.write('\n');

    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);


//使用时输入网址  比如：http://localhost:3000/?name=mywebsite&url=www.runoob.com