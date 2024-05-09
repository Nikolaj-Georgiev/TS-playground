// let userName = 'Niko';
let userName: string = 'Niko'; // no need to explicitly describe the type in this case it will be inferred by TS. You can use the declaration from the upper sentence
// userName = 34;
userName = 'Niko';

// let userAge:number = 34;
let userAge = 34;

// let isValid:boolean = true;
let isValid = true;

// string, number, boolean

// union type
let userId: number | string = 'abc1';
userId = 123;

// Object types
// let user: object;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: 'Niko',
  age: 43,
  isAdmin: true,
  id: 'abc', //123
};

// user = {};

// Array types

// let hobbies: Array<string>; valid but long
let hobbies: string[]; // number[], boolean[]

//{name:string; age:number}[]

hobbies = ['Cooking', 'Sports', 'Reading'];
// hobbies = [1, 2, 3];

// functions

// function add(a: number, b: number): undefined {// technically we can use it but we should use void
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
  // return result;// first-app.ts:53:3 - error TS2322: Type 'number' is not assignable to type 'void'.
}

function add1(a: number, b: number): number {
  const result = a + b;
  return result;
} // N.B. if we return something we want to set our return type to that!!! We can omit this and TS will infer the return type in this case.
