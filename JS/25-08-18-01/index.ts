function Demo(a:any,b:any) {
    console.log(a,b);
}


class Person {
    @Demo  name: string;
    age: number;
    static school:string
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('你好')
    }
}