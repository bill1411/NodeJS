
// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

// ucs2 - utf16le 的别名。

// base64 - Base64 编码。

// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

// binary - latin1 的别名。

// hex - 将每个字节编码为两个十六进制字符。


//创建buffer
const buffer = Buffer.from('hello world','utf8')

//输出为16进制
console.log(buffer.toString('hex'))
//输出为base64字符串
console.log(buffer.toString('base64'))


// 创建 Buffer 类
// Buffer 提供了以下 API 来创建 Buffer 类：
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');


// 写入缓冲区
// 语法
// 写入 Node 缓冲区的语法如下所示：

// buf.write(string[, offset[, length]][, encoding])
// 参数
// 参数描述如下：
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。

// 根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。
// 写入缓冲区
const buf = Buffer.alloc(3);
const len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len);
console.log('写入的内容是：' + buf.toString());

const bufnew = Buffer.alloc(256);
const lennew = bufnew.write("www.runoob.com");
console.log("写入字节数 : "+  lennew);
console.log('写入的内容是：' + bufnew.toString());


// 从缓冲区读取数据
// 语法
// 读取 Node 缓冲区数据的语法如下所示：

// buf.toString([encoding[, start[, end]]])
// 参数
// 参数描述如下：

// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。

// 返回值
// 解码缓冲区数据并使用指定的编码返回字符串。

var buffer_read = Buffer.alloc(50);
for (var i = 0 ; i < 26 ; i++) {
    buffer_read[i] = i + 97;
  }
//buffer_read.write('abcdefghijklmnopqrstuvwxvz');
console.log('内容是：' + buffer_read.toString('ascii'));
console.log('内容是：' + buffer_read.toString('utf8',3,5));
console.log('内容是：' + buffer_read.toString(undefined,3,5));


//将Node Buffer转化为 JSON对象
//buf.toJSON()
const buf88 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
//JSON.stringify() 会隐式地调用该 toJSON()。
const json = JSON.stringify(buf88);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log('将buff转化为json：' +　json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
      Buffer.from(value.data) :
      value;
  });
  
  // 输出: <Buffer 01 02 03 04 05>
  console.log(copy);


// 缓冲区合并
// 语法
// Node 缓冲区合并的语法如下所示：

// Buffer.concat(list[, totalLength])
// 参数
// 参数描述如下：

// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
// 返回值
// 返回一个多个成员合并的新 Buffer 对象。

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
//注意  汉字在nodejs中一个字站3个字节？
var buffer4 = Buffer.concat([buffer1,buffer2],3);
var buffer5 = Buffer.concat([buffer1,buffer2],4);
console.log("buffer3 内容: " + buffer3.toString());
console.log("buffer4 内容: " + buffer4.toString());
console.log("buffer5 内容: " + buffer5.toString());


var buffer6 = Buffer.from('runoob');
// 剪切缓冲区
var buffer7 = buffer6.slice(0,2);
console.log("buffer7 content: " + buffer7.toString());

var buf11 = Buffer.from('abcdefghijkl');
var buf22 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf22.copy(buf11, 2);
console.log(buf11.toString());