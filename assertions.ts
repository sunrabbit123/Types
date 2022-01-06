let someValue: unknown = "this is a string;";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;
