// let userName = 'Niko';
var userName = 'Niko'; // no need to explicitly describe the type in this case it will be inferred by TS. You can use the declaration from the upper sentence
// userName = 34;
userName = 'Niko';
// let userAge:number = 34;
var userAge = 34;
// let isValid:boolean = true;
var isValid = true;
// string, number, boolean
// union type
var userId = 'abc1';
userId = 123;
// Object types
// let user: object;
var user;
user = {
    name: 'Niko',
    age: 43,
    isAdmin: true,
    id: 'abc', //123
};
// user = {};
// Array types
// let hobbies: Array<string>; valid but long
var hobbies; // number[], boolean[]
//{name:string; age:number}[]
hobbies = ['Cooking', 'Sports', 'Reading'];
// hobbies = [1, 2, 3];
