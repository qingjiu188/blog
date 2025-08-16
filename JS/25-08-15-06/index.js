class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        for (let i = 0; i < n; i++) {
            console.log(`My name is ${this.name}, I am ${this.age} years old`);
        }
    }
}
const person = new Person("Alice", 30);
person.speak(3);
export {};
//# sourceMappingURL=index.js.map