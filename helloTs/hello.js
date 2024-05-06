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
