
// 1	exit
// 当进程准备退出时触发。
// 2	beforeExit
// 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
// 3	uncaughtException
// 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
// 4	Signal 事件
// 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
      console.log("该代码不会执行");
    }, 0);
    
    console.log('退出码为:', code);
    console.log("程序执行结束");
  });
  

  // 输出到终端[注意这句没反应]
process.stdout.write('输出到终端' + "Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log('参数读取:' + index + ': ' + val);
});

// 获取执行路径
console.log('获取执行路径:' + process.execPath);


// 平台信息
console.log('平台信息:' + process.platform);


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log('输出内存使用情况' + process.memoryUsage());
