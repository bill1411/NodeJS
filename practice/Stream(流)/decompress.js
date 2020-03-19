
//引入模块
var fs = require('fs')
var zlib = require('zlib')   //解压和压缩的模块

var readerStream = fs.createReadStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input2.txt.gz')

//链式流
readerStream.pipe(zlib.createGunzip())
            .pipe(fs.createWriteStream('D:\\Project\\NodeJS\\practice\\Stream(流)\\input2.txt'));

console.log('解压完成')