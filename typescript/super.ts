super: Note that if you call super on a child class it is redirected to the prototype as shown below:

class Base {
	log() { console.log('hello world'); }
}
class Child extends Base {
	log() { super.log() };
}


generates:
var Base = (function () {
	function Base() {
}
Base.prototype.log = function () { console.log('hello world'); };
	return Base;
})();

var Child = (function (_super) {
	__extends(Child, _super);
	function Child() {
		_super.apply(this, arguments);
	}
	Child.prototype.log = function () { _super.prototype.log.call(this); };
	return Child;
})(Base);


Notice _super.prototype.log.call(this) .
This means that you cannot use super on member properties. Instead you should just use this .

class Base {
	log = () => { console.log('hello world'); }
}
class Child extends Base {
	logWorld() { this.log() };
}