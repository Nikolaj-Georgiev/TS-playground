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
