::::::Non-Nullable Types

::::The null and undefined Values
Prior to TypeScript 2.0, the type checker considered null and undefined to be valid values of every type. Basically, null and undefined could be assigned to anything. That included primitive types such as strings, numbers, and booleans:
let name: string;
	name = "Marius";   // OK
	name = null;       // OK
	name = undefined;  // OK

	let age: number;
	age = 24;         // OK
	age = null;       // OK
	age = undefined;  // OK

	let isMarried: boolean;
	isMarried = true;       // OK
	isMarried = false;      // OK
	isMarried = null;       // OK
	isMarried = undefined;  // OK


::::Strict Null Checking
TypeScript 2.0 adds support for non-nullable types. There's a new strict null checking mode that you can opt into by providing the --strictNullChecks flag on the command line. Alternatively, you can enable the strictNullChecks compiler option within your project's tsconfig.json file:
{
    "compilerOptions": {
        "strictNullChecks": true
        // ...
    }
}

// Compiled with --strictNullChecks

let name: string;
	name = "Marius";   // OK
	name = null;       // Error
	name = undefined;  // Error

	let age: number;
	age = 24;         // OK
	age = null;       // Error
	age = undefined;  // Error

	let isMarried: boolean;
	isMarried = true;       // OK
	isMarried = false;      // OK
	isMarried = null;       // Error
	isMarried = undefined;  // Error