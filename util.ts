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
