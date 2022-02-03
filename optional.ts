type T = {
  a: string;
  b?: string;
};

// It is normal
const sameAsT: { [K in keyof T]: string } = {
  a: "asdf", // a is required
};

// add optional type
const canBeNotPresent: { [K in keyof T]?: string } = {};

// add required types
const mustBePreset: { [K in keyof T]-?: string } = {
  a: "asdf",
  b: "asdf", // b became required
};
