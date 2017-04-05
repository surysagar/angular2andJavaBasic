for...of
A common error experienced by beginning JavaScript developers is that for...in for an
array does not iterate over the array items. Instead it iterates over the keys of the object
passed in. This is demonstrated in the below example. Here you would expect 9,2,5 but
you get the indexes 0,1,2 :


var someArray = [9, 2, 5];
for (var item in someArray) {
	console.log(item); // 0,1,2  we get keys not values :(
}


This is one of the reasons why for...of exists in TypeScript (and ES6). The following
iterates over the array correctly logging out the members as expected:

var someArray = [9, 2, 5];
for (var item of someArray) {
	console.log(item); // 9,2,5
}

// becomes //
for (var _i = 0; _i < someArray.length; _i++) {
	var item = someArray[_i];
	console.log(item);
}

