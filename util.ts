interface Post {
  title: string;
  description: string;
}

// Partial<Post> = {title? : string; description? : string;}
const updateePost = (post: Post, updateArg: Partial<Post>) => {
  return { ...post, ...updateArg };
};

const examPost: Readonly<Post> = {
  title: "그러게",
  description: "나 말입니다.",
};

//examPost.description = "123";
// only read

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  home: { title: "asdf" },
  about: { title: "asdf" },
  contact: { title: "asdf" },
};

type PostTitle = Pick<Post, "title">; // with title

const examPost2: PostTitle = {
  title: "asdf",
};

type PostDescription = Omit<Post, "title">; // without title

const examPost3: PostDescription = {
  description: "asdf",
};

// 2번째 인자값을 제외함
type T0 = Exclude<"a" | "B" | "c", "B">; // "a" | "c"
type T1 = Exclude<string | number | (() => void), Function>; // string | number

// 둘의 교집합
type T2 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T3 = Extract<string | number | (() => void), Function>; // () => void

type NonNullType = NonNullable<string | number | undefined>;

// 함수 타입의 매개변수 타입들로 튜플타입을 구성함
declare function f1(arg: { a: number; b: string }): void;
type T4 = Parameters<typeof f1>;

interface constructorInterface {
  new (message: string, code: number): undefined;
}

type T5 = ConstructorParameters<constructorInterface>; // [message : string, code : number]
type T6 = ConstructorParameters<FunctionConstructor>; // string[]
type T7 = ConstructorParameters<ErrorConstructor>;
type T8 = ConstructorParameters<RegExpConstructor>;
const some1: T5 = ["asdf", 123];

// 반환값에 대한 타입
type T9 = ReturnType<typeof f1>;

//
class C {
  x = 0;
  y = 0;
}
type T10 = InstanceType<typeof C>;
type T11 = C;
const O1: T10 = new C();

interface Props {
  a?: number;
  b?: string;
}

const O2: Props = { a: 5 };
const O3: Required<Props> = { a: 5, b: "asdf" }; //a, ,b is required
