CONSTANT::::::::::::
//Both let and const create variables that are block-scoped – they only exist within the innermost block that surrounds them.

const foo = { bar: 123 };
foo.bar = 456; // Allowed!
console.log(foo); // { bar: 456 }

const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a
constant


**** A const is block scoped like we saw with let :

const foo = 123;
if (true) {
	const foo = 456; // Allowed as its a new variable limited to this `if` block
}


/* const lets us declare variables which don’t change over time, which are immutable.

The important gotcha with const is that the variable is immutable, but not the value, the thing the variable points to.

This means that if we declare an object as const, confusingly we can still change properties of the object later on.

To solve this and make an object immutable we use the Object.freeze(…​) function which together with the "use strict"; 
param throws an error if we try to change the object.

every project required:*/
export const Constant = Object.freeze({
  ENTITY: {
    PROJ: [A:"aaa"],
    NEWCONST: "loppk"
	}
});