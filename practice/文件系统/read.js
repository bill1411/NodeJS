

//fs.read(fd, buffer, offset, length, position, callback)

// fd - 通过 fs.open() 方法返回的文件描述符。
// buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。
// length - 要从文件中读取的字节数。
// position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
// callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。


var fs = require("fs");
var filePath = './文件系统/input2.txt';

var buf = new Buffer.alloc(1024);

fs.open(filePath,'r+',function(err,fd){
    if(err)
        return console.error(err);
   console.log("文件打开成功！");
   console.log("准备读取文件：");

   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if (err){
        console.log(err);
     }
     //打印结果是51个字节被读取，总共是17个汉字，每个汉字3个字节
     console.log(bytes + "  字节被读取");

    // 仅输出读取的字节
    if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
    }

    fs.close(fd,function(err){
        if (err){
            console.log(err);
         }
    });

    console.log("文件已关闭");

   });
});