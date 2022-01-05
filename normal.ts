const str1: string = "it is example string";
const str2: "It is Literal string types" = "It is Literal string types";
const str3: "Both" | "A" | "or" | "B" = "Both";

const num1: number = 1;
const num2: 1 | 2 = 2; // It is Literal number types;
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 100n;

const isDone: boolean = false;

const numberList: number[] = [1, 2, 3];
const numberList2: Array<number> = [1, 2, 3];

const stringNumberTuple: [string, number] = ["hello", 10];
// const stringNumberTuple : [string, number] = ["hello", 10];
// it is not working

enum Color {
  Red = 1,
  Green,
  Blue,
}
const color1: Color = Color.Red;
const color2: string = Color[3];
console.log(color2); // expected Blue

const unknownValue: unknown = 4;
