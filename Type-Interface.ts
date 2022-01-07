// 1. Interface

interface Fish {
  name: string;
}

interface Tetraodon extends Fish {
  niddle: boolean;
}

const tetraodon: Tetraodon = { name: "molo", niddle: true };

interface Lolem {
  title: string;
}

// Adding new fileds to an existing interface
interface Lolem {
  description: string;
}

const firstWindow: Lolem = {
  title: "asdf",
  description: "asdf",
};


// 2. Types
type Animal {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
}

const bear: Bear = { name: "molo", honey: true };


// A type cannot be changed after being created
// Error : Duplicate identifier 'Something'
type Something = {
  title: string;
}

type Something = {
  description : string;
}
