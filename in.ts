// in from js
const trees: string[] = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees); // true
console.log("redwood" in trees); // false
console.log("length" in trees); //true
// in operator is return true when index or properties

// in from type
type A = { [k in string]: string };
// shuold key type is string
const exampleA: A = { asdf: "Asdfsaf,", "!23123safd": "Asdfs" };
type B = "A" | "B" | "C" | "D" | "E";
type F = { [k in B]: string };
