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
function printId(id: number | string) {
  console.log('Your ID is: ' + id);
}

printId('Pesho');
printId('42');
// printId({ pesho: 42 }); //hello.ts:39:9 - error TS2345: Argument of type '{ pesho: number; }' is not assignable to parameter of type 'string | number'.

function printId1(id: number | string) {
  // console.log(id.toUpperCase());//Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'.ts(2339)

  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello ' + x.join(' and '));
    // Here: 'x' is 'string[]'
  } else {
    console.log('Welcome lone traveler ' + x);
    // Here: sx is a string
  }
}

welcomePeople(['Pesho', 'Gosho', 'Atanas', 'Bai Hui']);
welcomePeople('Suzana');
