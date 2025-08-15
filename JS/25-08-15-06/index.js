var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function (n) {
        for (var i = 0; i < n; i++) {
            console.log("My name is ".concat(this.name, ", I am ").concat(this.age, " years old"));
        }
    };
    return Person;
}());
var person = new Person("Alice", 30);
person.speak(3);
