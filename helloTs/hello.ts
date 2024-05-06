'use strict';
// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Madison', new Date());

// The parameter's type annotation is an object type
function printCoord(pt: { x: Number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  const name = obj.first.concat(obj.last !== undefined ? ' ' + obj.last : '');
  console.log(name);
}

printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
