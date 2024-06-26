'use strict';
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Madison', new Date());
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var name = obj.first.concat(obj.last !== undefined ? ' ' + obj.last : '');
    console.log(name);
    // this is not working as intended!!
    // console.log(obj.last?.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
///////////////////
// Union Types
function printId(id) {
    console.log('Your ID is: ' + id);
}
printId('Pesho');
printId('42');
// printId({ pesho: 42 }); //hello.ts:39:9 - error TS2345: Argument of type '{ pesho: number; }' is not assignable to parameter of type 'string | number'.
function printId1(id) {
    // console.log(id.toUpperCase());//Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'.ts(2339)
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// Array in union
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello ' + x.join(' and '));
        // Here: 'x' is 'string[]'
    }
    else {
        console.log('Welcome lone traveler ' + x);
        // Here: sx is a string
    }
}
welcomePeople(['Pesho', 'Gosho', 'Atanas', 'Bai Hui']);
welcomePeople('Suzana');
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([3, 2, 1, 2, 3]));
console.log(getFirstThree('[3,2,1]'));
function printCoords(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoords({ x: 100, y: 100 });
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });
///////////////////
// Type Assertions
//const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;
//const myCanvas1 = <HTMLCanvasElement>document.getElementById('main_canvas'); //not working with tsx?
// declare const expr: any;
// type T = { a: 1; b: 2; c: 3 };
// // ---cut---
// const a = expr as any as T;
/////////////////
// Literal Types
function printText(s, alignment) {
    // ...
} // very useful for func args!!!
printText('Hello, world', 'left');
printText("G'day, mate", 'centre'); //hello.ts:126:26 - error TS2345: Argument of type '"centre"' is not assignable to parameter of type '"center" | "left" | "right"'.
// Numeric literal types work the same way:
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare('Goshoo', 'Pesho'));
function configure(x) {
    //
}
configure({ width: 100 });
configure('auto');
configure('automatic'); //Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
