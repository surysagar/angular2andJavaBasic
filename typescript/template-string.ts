:: template-string:now strings can have multi lines..
//In ES6 we have another way of defining strings, using the back-tick character `

let multi = `
	hello
	world
	my
	name
	is
	asim`;

console.log(multi);
// The above prints out:

Copyhello
world
my
name
is
asim
// With ` strings can now span multiple lines and they are also formatted with new line characters.

:: Variable Substitution

Another really interesting feature of declaring strings with ` is that they can now expand variables using the ${variable_name} syntax, like so:

let name = "asim";

let multi = `
hello
world
my
name
is
${name}
`;
console.log(multi);