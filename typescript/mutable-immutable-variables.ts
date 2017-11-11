/* @Mutable variable::

Variables created by let and var are mutable:*/

let foo = "foo";
foo = "moo";
console.log(foo);

/*Tip:

Mutable in this case means can change over time.

@Imutable: Variables created by const however are immutable, they don’t change over time, specifically the the const variable can’t 
point to another thing later on.*/

const foo = 'abc';
