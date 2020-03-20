const util = require('util');

//定义异步函数
async function fn() {
    return 'hello world';
  }
//util.callbackify
//util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数
const callbackFunction = util.callbackify(fn);

//第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值
callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });


function fn1() {
    return Promise.reject(null);
}

const callbackFunction1 = util.callbackify(fn1);

callbackFunction1((err, ret) => {
    // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
    err && err.hasOwnProperty('reason') && err.reason === null;  // true
    console.log(ret);
});