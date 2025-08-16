//合并
interface PersonInterface {
  name: string;
  age: number;
}

interface PersonInterface {
  speak(): void;
}

interface StudentInterface extends PersonInterface {
  grade: string;
}

//交叉

type PersonType = {
  name: string;
  age: number;
}&{
  speak(): void;
}

type StudentType = PersonType & {
  grade: string;
}

