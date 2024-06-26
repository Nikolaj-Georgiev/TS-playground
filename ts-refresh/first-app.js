var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let userName = 'Niko';
var userName = 'Niko'; // no need to explicitly describe the type in this case it will be inferred by TS. You can use the declaration from the upper sentence
// userName = 34;
userName = 'Niko';
// let userAge:number = 34;
var userAge = 34;
// let isValid:boolean = true;
var isValid = true;
var userId = 'abc1';
userId = 123;
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
// functions
// function add(a: number, b: number): undefined {// technically we can use it but we should use void
function add(a, b) {
    var result = a + b;
    console.log(result);
    // return result;// first-app.ts:53:3 - error TS2322: Type 'number' is not assignable to type 'void'.
}
function add1(a, b) {
    var result = a + b;
    return result;
} // N.B. if we return something we want to set our return type to that!!! We can omit this and TS will infer the return type in this case.
function calculate1(a, b, calcFn) {
    calcFn(a, b);
}
calculate1(2, 5, add1);
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add1);
// interfaces are easily extendable -> this feature is called declaration merging
// interface Credentials {
//   mode: string;
// }
var creds;
creds = {
    password: 'abs',
    email: 'test@test.tt',
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
login(creds);
login(new AuthCredentials());
var admin;
admin = {
    permissions: ['d', 'd', 'login'],
    userName: 'Niko',
    pictureUrl: '../public/imgOfHujnja.png',
};
var role; //admin, user, editor
role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc'; //this will bring an error
//////////////////////////
// type guards
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        //...
    }
}
////////////////////////////
// Generic types
var roles;
roles = ['admin', 'editor'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) { },
};
//generic function
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// const newUser = merge<{ name: string }, { age: number }>(// TS is able to infer the types without me explicitly write them!!!
var newUser = merge({ name: 'Niko' }, { age: 43 });
newUser.name;
