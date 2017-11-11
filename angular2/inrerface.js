interface point = {
	readonly x : number,
	readonly y : number
}

let p1 : point = { x:8, y:9};
p1.x = 10  // throw error



interface person = {
	firstName : string,
	lastName : string,
	age?: number. // option field
}

var mickel:person = {
	firstName : "mic",
	lastName : "dsoza"
}
