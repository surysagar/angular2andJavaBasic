this.y = _.cloneDeep(this.x);   // angular.copy
this.y = _.clone (this.x);

_.isNull(s), _.isUndefined(s) // test validation

const Index = _.findIndex(this.selectedModel, selected);  // find index of object from array
_.findIndex(users, { 'user': 'fred', 'active': false });  // => 1
_.indexOf([1, 2, 1, 2], 2);     // => 1

_.isEqual(x,y);  // true|false
_.get(obj.x[i], 'value');

_.includes({ 'a': 1, 'b': 2 }, 1);  // true
_.includes('locale', '-');  // true
_.includes([1, 2, 3], 1);   // true

::_.filter::Filter only condition passed objs
	this.activePeople = _.filter(pplArrayOfObj, (p) => {
		if (p['active'] === true) {
		  return p;  // rerturn obj
		}
	});

::_.remove(array, [predicate=_.identity]):: (Array): Returns the new array of removed elements.
	var array = [1, 2, 3, 4];
	var evens = _.remove(array, function(n) {
	  return n % 2 == 0;
	}); // [1,3];

::_.each / foreach are same
	_.each(supportedBrowsersArray, function (browser) {
      _.filter(self.browsers, function (item) {
        if (browser === item.browserName) {
          finalBrowser.push(item);
        }
      })
    });



::_.isEmpty
	_.isEmpty(null); _.isEmpty(true); _.isEmpty(1177);   // 'all are true'
	_.isEmpty([1, 2, 3]); _.isEmpty({ 'a': 1 });         // all are true

::_.pull
	var array = ['a', 'b', 'c', 'z', 'a', 'b', 'c']; 
	_.pull(array, 'a', 'c');
	console.log(array);
	// => ['b', 'z', 'b']

::_.pick(object, [paths])::Creates an object composed of the picked object properties.
	var object = { 'a': 1, 'b': 2, 'c': 3 }; 
	_.pick(object, ['a', 'c']);	// => { 'a': 1, 'c': 3 }

::_.concat
	const R = _.concat(a, b);

::_.union:Creates an array of unique values
	_.union([2], [1, 2]);  // => [2, 1]
	list = _.union({a:'a', b: 2}, {a:'a'});  // list = {a:'a', b:2};

::_.uniq:: Creates a duplicate-free version of an array
	_.uniq([2, 1, 2]);   //  [2, 1]

::_.assign:: Subsequent sources overwrite property assignments of previous sources.
	_.assign({ 'a': 0 }, { 'a': 1 }, { 'c': 3 }); // => { 'a': 1, 'c': 3 }
	_.assign({}, person, {personName: (obj.name + '-' + obj.surname)});



::_.chain x:::explicit method chain sequences enabled. 
	var users = [
	    { 'user': 'pebbles', 'age': 10 },
	    { 'user': 'barney',  'age': 36 },
	    { 'user': 'fred',    'age': 40 }  
	]; 
	var youngest = _
	  .chain(users)
	  .sortBy('age')
	  .map(function(o) {
	  console.log(o);
	    return o.user + ' is ' + o.age;
	  })
	  .last()   // can be '.head' to get result of 10
	  .value();
	// => 'pebbles is 40'.   'pebbles is 10'.

	Object {age: 1, user: "pebbles"}
	Object {age: 36, user: "barney"}
	Object {age: 40, user: "fred"}

::_.keys(object):: Creates an array of the own enumerable property names of object.
	1: return _.keys(control.value).length > 0 ? null : {'required': true};
	2: function Foo() {
	  this.a = 1;
	  this.b = 2;
	}
	_.keys(new Foo);
	// => ['a', 'b'] (iteration order is not guaranteed)

:: string opertaions:
	_.capitalize('FRED'); // => 'Fred'. Converts the first character of string to upper case
	_.isString('abc'); // true