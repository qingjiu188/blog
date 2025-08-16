let a; //(非原始类型)
a = {}; // 普通对象
a = { name: 'Tom' }; // 普通对象
a = [1, 2, 3]; // 数组也是对象
a = function () { }; // 函数也是对象
a = new String('abc'); // 包装对象
class Person {
} // 类也是对象
a = new Person(); // 实例化类
let b; //(原始类型的父类型)
b = 1; // 数字
b = 'abc'; // 字符串
b = true; // 布尔值
b = {}; // 普通对象
b = []; // 数组也是对象
b = function () { }; // 函数也是对象
b = new String('abc'); // 包装对象
class Person {
} // 类也是对象
b = new Person(); // 实例化类
b = null;
b = undefined; // 这两个是原始类型,不能存储到Object类型中
export {};
//# sourceMappingURL=index.js.map