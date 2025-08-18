//new表示该类型是可以通过new操作符调用
//...args表示构造器可以接收【任意数量】的参数
//any[]表示构造器可以是【任意类型】的参数
//{}表示返回类型是对象（非null,非undefined的对象）
//需求fn是一个类
function test(fn) {
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
test(Person);
//仅声明构造类型
