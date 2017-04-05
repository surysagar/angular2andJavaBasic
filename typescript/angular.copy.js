let x = { name: 'Marek', age: 20 };
let y = Object.assign({}, x);
x === y; //false

or



const copy = { ...original }