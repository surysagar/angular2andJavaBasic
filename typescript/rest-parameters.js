Rest parameters: (denoted by ...argumentName for the last argument) allow you to quickly
accept multiple arguments in your function and get them as an array

function iTakeItAll(first, ...allOthers) {
	console.log(allOthers);
}
iTakeItAll(2,5,6,7,8)
// [5, 6, 7, 8]