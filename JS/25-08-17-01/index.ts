function CustomToString(target:Function) {
    target.prototype.toString = function() {
        return JSON.stringify(this, null, 2)
    }
    Object.seal(target.prototype);
}

@CustomToString
class Person {
    name: string;
     age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person('张三', 18);
console.log(p1.toString()); // 张三