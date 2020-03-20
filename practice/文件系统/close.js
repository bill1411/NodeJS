

//fs.close(fd, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// callback - 回调函数，没有参数。


var fs = require("fs");
var filePath = './文件系统/input2.txt';
var buf = new Buffer.alloc(1024);

fs.open(filePath,'r+',function(err,fd){
    if(err){
        console.error(err);
    }
    console.log('文件打开成功')
    console.log('准备读取文件')
    fs.read(fd,buf,0,buf.length,0,function(err, bytes){
        if(err){
            console.error(err);
        }
        // 仅输出读取的字节
        if(bytes > 0){
            console.log('读到的内容是：'  + buf.slice(0, bytes).toString() + ' 总共字节数是：'  + bytes);
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
            console.log(err);
            } 
            console.log("文件关闭成功");
        });
    });
});

