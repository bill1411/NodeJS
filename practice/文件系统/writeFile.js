var fs = require('fs');

var filePath = './文件系统/input.txt';

//fs.writeFile(file, data[, options], callback)  
//file 文件路径  
//data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
//options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
//callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。


//writeFile 是覆盖原文的写方式
console.log('准备写文件')
fs.writeFile(filePath, 'This is PLA Air Force speaking.You are about to enter the Chinese airspace.Leave immediately! Leave immediately! \n这里是中国空军，你即将进入中国领空，请你立即离开！立即离开！',function(err){
    if(err)
        return console.error(err);
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile(filePath,function(err,data){
        if(err)
            return console.error(err);
        console.log("异步读取文件数据: " + data.toString());
    });
});



//通过追加方式写文件
console.log('通过追加方式写文件写文件')
fs.appendFile(filePath, '\nIf you do not leave, we will take necessary measures to maintain the security of the airspace！',function(err){
    if(err)
        return console.error(err);
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile(filePath,function(err,data){
        if(err)
            return console.error(err);
        console.log("异步读取文件数据: " + data.toString());
    });
});





