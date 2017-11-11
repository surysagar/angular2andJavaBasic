// Object Destructuring is useful because it allows you to do in a single line, what would otherwise
// require multiple lines. Consider the following case:


var rect = { x: 0, y: 10, width: 15, height: 20 };
// Destructuring assignment
var {x, y, width, height} = rect;
console.log(x, y, width, height); // 0,10,15,20 you dont have to mention obj.x, obj.y here


// Array Destructuring:::::::::::::::: **ECMA feature
// A common programming question: "How to swap two variables without using a third one?".
// The TypeScript solution:

var x = 1, y = 2;
[x, y] = [y, x];  // ES6 feature
console.log(x, y); // 2,1


Array Destructuring with rest **ECMA feature::
You can pick up any number of elements from the array and get an array of the remaining
elements using array destructuring with rest.

var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1, 2, [3,4]


Array Destructuring with ignores::
You can ignore any index by simply leaving its location empty i.e. , , in the left hand side
of the assignment. For example:
var [x, , ...remaining] = [1, 2, 3, 4];
console.log(x, remaining); // 1, [3,4]

