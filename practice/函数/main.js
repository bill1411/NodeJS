
//一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

Node.js中函数的使用与Javascript类似
function say(name){
    console.log('name是：' + name);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say,'bill')


//匿名函数  在execute函数中直接定义匿名函数体并传参数
function execute(someFunction, value) {
    someFunction(value);
  }
  
  execute(function(word){ console.log(word) }, "Hello");