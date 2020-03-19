//引入模块
var fs = require("fs");
var zlib = require('zlib');

var readerStream = fs.createReadStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input.txt');

readerStream.pipe(zlib.createGzip())
            .pipe(fs.createWriteStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input2.txt.gz'))

console.log('添加压缩文件完成')