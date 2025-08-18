function Demo(target:Function) {
  return class {
    test() {
      console.log('200');
      console.log('300');
      console.log('400');
    }
  }
}

@Demo
class Person {
    test() {
        console.log('100');
    }
}
console.log(Person);
// const person = new Person();
// person.test();
