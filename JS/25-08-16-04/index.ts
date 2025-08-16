function logData<T,U>(data1: T, data2: U):T|U{
    return Date.now() % 2 === 0 ? data1 : data2;
}
logData<number, string>(42, 'Hello, World!');

//泛型函数可以接受任意类型的参数，并在调用时指定具体的类型。<>随意输入，调用时指定具体类型。
//泛型可以传递多个类型参数



//使用泛型定义接口
interface PersonInterface<T> {
  name: string;
  age: number;
  extraInfo: T;
}

type JobInfo = {
  title: string;
  company: string;
};

let p1: PersonInterface<JobInfo> = {
  name: '张三',
  age: 18,
  extraInfo: {
    title: '软件工程师',
    company: '某科技公司'
  }
};
