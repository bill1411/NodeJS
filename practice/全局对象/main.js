
//_filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
console.log(__filename);

//__dirname 表示当前执行脚本所在的目录。
console.log(__dirname);

//setTimeout()  定时器只执行一次指定函数。
function printHello(){
    console.log('hello world');
}
//2秒后执行printHello函数
setTimeout(printHello,2000);


function printHello2(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 var t = setTimeout(printHello2, 2000);
 
 // 清除定时器
 clearTimeout(t);

//setInterval(cb, ms)   设置定时器  循环执行  直到主动停止或者遇到clearInterval()

// 两秒后执行以上函数
var t1 = setInterval(printHello, 2000);

//清除循环定时器
clearInterval(t1);

//输出时间，表示计时开始。
console.time('代码执行起始时间')
//结束时间，表示计时结束。
console.timeEnd('代码执行起始时间')


