// let a: string
// let b:number
// let c: boolean
// a="hello"
// b=9
// c=true  
// console.log(a, b, c)
// function count(x: number, y: number): number {
//     return x + y;
// }
// let result = count(1, 2)
// console.log(result)
// let a = 99
// a= "hello"
// let str1:string
// str1 = "hello"
// // str1=new String("hello")
// let str2:String
// str2 = "hello"
// str2=new String("hello")
// console.log(typeof str1);
// console.log(typeof str2);
let a;
a = 99;
a = false;
a = 'hello';
console.log(a);
let x;
// 第一种使用类型保护来确保 a 是 string 类型
if (typeof a === 'string') {
    x = a; // 只有当 a 是 string 时，才可以赋值给 x
}
// 第二种使用类型断言来告诉 TypeScript a 是 string 类型
x = a; // 也可以使用类型断言
//or
x = a; // 另一种类型断言的语法
function demo() {
    throw new Error("This function never returns");
}
export {};
//# sourceMappingURL=index.js.map