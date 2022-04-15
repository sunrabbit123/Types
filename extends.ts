type CopyRecord<K extends string | number | symbol, T> = { [P in K]: T };
// key값으로 string, number, symbol인 애들만 가능

type Test1<K extends number> = { [P in K]: string };

const example1: Test1<1 | 2 | 3> = { 1: "test1", 2: "test2", 3: "test3" };

type Test2<T1, T2> = T1 extends T2 ? T1 : T2;
const example2: Test2<string, number> = 123;
