interface Person {
  eat: () => {};
  sleep: () => {};
}

type Test5 = keyof Person;
const test1: Test5 = "eat";
const test2: Test5 = "sleep";
// type Test5 = "eat" | "sleep";

type G = { [k in keyof Person]: string };
const test3: G = {
  eat: "asfd",
  sleep: "asdfasd",
};
// key of type G is only Person properties name literal

const PROGRAMING_LANGUAGE = {
  python: "Python",
  javascript: "JavaScript",
} as const;

type PROGRAMING_LANGUAGE =
  typeof PROGRAMING_LANGUAGE[keyof typeof PROGRAMING_LANGUAGE];

const arg1: PROGRAMING_LANGUAGE = PROGRAMING_LANGUAGE.python;

type H = keyof typeof PROGRAMING_LANGUAGE; // get PROGRAMING_LANGUAGE keys
type I = typeof PROGRAMING_LANGUAGE[H]; // get PROGRAMING_LANGUAGE value
