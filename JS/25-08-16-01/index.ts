//使用 interface 定义 Person 对象
interface PersonInterface {
  name: string;
  age: number;
  speak():void;
}
// 使用 type 定义 Person 对象
type PersonType = {
  name: string;
  age: number;
  speak(): void;
}

let p1: PersonInterface = {
  name: '张三',
  age: 18,
  speak() {
    console.log('hello');
  }
}

let p2: PersonType = {
  name: '李四',
  age: 22,
  speak() {
    console.log('hi');
  }
}

//

