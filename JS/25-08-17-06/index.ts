interface Person {
    introduce(): void;
}

function LogInfo(n: number) {
    return function (target: Function) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`Name: ${this.name}, Age: ${this.age}`);
            }
        }
    }
}

// function LogInfo(target: Function) {
//     target.prototype.introduce = function () {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }   

@LogInfo(3)
class Person implements Person {
    constructor(
        public name: string,
        public age: number
    ) { }
    speak() {
        console.log(`你好`);
    }
}
const p1 = new Person('张三', 18);
p1.introduce();
