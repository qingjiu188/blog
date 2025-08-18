type Constructor = {
    new (...args: any[]): {};
    wife: string;
}
//需求fn是一个类
function test(fn: Constructor){
}

class Person {
    static wife: string;
}

test(Person);

//声明构造类型+静态属性