//PersonInterface接口
interface PersonInterface {
    name: string;
    age: number;//属性冒号前加了 ？，表示该属性是可选的
    speak(n: number): void;
}  

class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
    ) { }
    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            console.log(`My name is ${this.name}, I am ${this.age} years old`);
        }
    }
}

const person = new Person("Alice", 30);
person.speak(3);
