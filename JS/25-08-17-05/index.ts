//限制类型
type Constructor = new (...args: any[]) => {};


//泛型约束
function LogTime<T extends Constructor>(target: T): T {
    return class extends target {
        createdTime: Date;
        constructor(...args: any[]) {
            super(...args);
            this.createdTime = new Date();
        }
        getTime() {
            return `创建时间：${this.createdTime}`;
        }
    }
}

@LogTime
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('你好呀！')

    }
}

interface PersonInterface {
    getTime(): void
}

const p1 = new Person('张三', 18);
console.log(p1);
console.log(p1.getTime());
