1. You don't need to keep typing function
2. It lexically captures the meaning of this
3. It lexically captures the meaning of arguments

var inc = (x)=>x+1;

// in in typescript
class Person {
	constructor(public age:number) {}
	growOld = () => {
		this.age++;
	}
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000); // 2

//In JS
function Person(age) {
	this.age = age;
	var _this = this; // capture this
	this.growOld = function() {
		_this.age++; // use the captured this
	}
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000); // 2

