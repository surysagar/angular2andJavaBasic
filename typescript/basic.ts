TypeScript is just standardizing all the ways you provide good
documentation on JavaScript.
TypeScript is just JavaScript with docs.

*****postfix //TypeScript uses postfix type annotations

var foo: number = 123;


*****interface // use: structural way to create and pass parameters

interface Point2D {
	name: string;
	age: number;
}

var personInput: Point2D = { name: "sagar", age: 34 }


function savePerson(pointParameter: Point2D) { /* do something */ }

savePerson(personInput)


******emit javascript errors //Type errors do not prevent JavaScript emit

var foo = 123;
foo = '456'; // Error: cannot assign a `string` to a `number`

will emit the following js:

var foo = 123;
foo = '456';




******safety && easily use //A major design goal of TypeScript was to make it possible for you to safely and easily use
//existing JavaScript libraries in TypeScript.

declare var $:any;
$('.awesome').show(); // Okay!


declare var $:{
(selector:string): any;
};

$('.awesome').show(); // Okay!
$(123).show(); // Error: selector needs to be a string


*****constructor used as interface

class Point {
		constructor(public x: number, public y: number) {  // created type here
	}

	add(point: Point) {   // access type from constructor
		return new Point(this.x + point.x, this.y + point.y);
	}
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}


****typescript classes:

class Point {
	x: number;
	y: number;
constructor(x: number, y: number) {
	this.x = x;
	this.y = y;
}
add(point: Point) {
	return new Point(this.x + point.x, this.y + point.y);
}
}
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}


This class generates the following JavaScript on ES5 emit:
var Point = (function () {
function Point(x, y) {
this.x = x;
this.y = y;
}
Point.prototype.add = function (point) {
return new Point(this.x + point.x, this.y + point.y);
};
return Point;
})();




****type inheritence:

class Point3D extends Point {   // used above class Point and has been extended.
	z: number;
	constructor(x: number, y: number, z: number) {
		super(x, y);  // used to access parent class so no need to again write(this.x = x and this.y = y)
		this.z = z;
	}
	add(point: Point3D) {   // used own constructor type for point parameter future instance
		var point2D = super.add(point);
		return new Point3D(point2D.x, point2D.y, this.z + point.z); 
	}
}


**** static : TypeScript classes support static properties that are shared by all instances of the class.
A natural place to put (and access) them is on the class itself and that is what TypeScript does:

class Something {
	static instances = 0;
		constructor() {
		Something.instances++;
	}
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2

// conversion to javascript
var Something = (function () {
	function Something() {
		Something.instances++;
	}
	return Something;
}());
Something.instances = 0;  // static property value assigned..
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2

****access Modifiers:

accessible-on 		public protected private
class 					yes 	yes 	yes
class-children 	 		yes 	yes 	no
class-instances 		yes 	no 		no