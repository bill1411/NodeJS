

//截取文件（截取后源文件也就少了）
//fs.ftruncate(fd, len, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// len - 文件内容截取的长度。
// callback - 回调函数，没有参数。

var fs = require("fs");
var filePath = './文件系统/input2.txt';
var buf = new Buffer.alloc(1024);   //定义了缓冲区

fs.open(filePath,'r+',function(err,fd){
    if(err){
        console.error(err);
    }
    console.log('文件打开成功')
    console.log('准备截取文件')
    console.log("截取10字节内的文件内容，超出部分将被去除。");

    //截取文件
    fs.ftruncate(fd,10,function(err){
        if(err){
            console.error(err);
        }
    });

    console.log("文件截取成功。");
    console.log("读取相同的文件"); 
 
    //读取文件
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err);
        }
        // 仅输出读取的字节
        if(bytes > 0){
            console.log('截取到的文件内容是:' + buf.slice(0, bytes).toString())
        }
    });

    // 关闭文件
    fs.close(fd, function(err){
    if (err){
        console.log(err);
    } 
    console.log("文件关闭成功！");
    });

});