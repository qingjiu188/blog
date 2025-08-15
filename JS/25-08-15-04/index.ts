//简写前
// class Person {
//     public name: string;
//     public age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

//简写后
class Person {
    constructor(public name: string, public age: number) {}
}