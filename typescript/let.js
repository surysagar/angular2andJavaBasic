LET:  { does not create a new variable scope. The variable foo is the same
inside the if block as it is outside the if block. This is a common source of errors in
JavaScript programming.

var foo = 123;
if (true) {
var foo = 456;
}
console.log(foo); // 456

you get a true unique element disconnected from what you might have defined outside the
scope

***Functions create a new scope
Since we mentioned it, we'd like to demonstrate that functions create a new variable scope-in JavaScript. Consider the following:

var foo = 123;
function test() {
	var foo = 456;
}
test();
console.log(foo); // 123

*****Generated JS: let converts in block scope as a "_variable name" eq.

var foo = '123';
if (true) {
	let foo = 123;
}
// becomes //
var foo = '123';
if (true) {
	var _foo = 123; // Renamed
}


**** use let in closure

var funcs = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {   // use let instead of var here
	funcs.push(function() {     // or use IIEF here as a wrapper
		console.log(i);
	})
}
// call them
for (var j = 0; j < 3; j++) {
	funcs[j]();
}

// 3,3.3

It can greatly enhance your code readability and decrease the chance of a programming error







CONSTANT::::::::::::

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