const printArgument = (obj: { first: string; second?: string }) => {
  console.log(JSON.stringify(obj));
  //console.log(obj.second.toUpperCase()); // Object is possibly 'undefined'
};

printArgument({ first: "asdf" }); // second is optional properties;
printArgument({ first: "asdf", second: "123" });
