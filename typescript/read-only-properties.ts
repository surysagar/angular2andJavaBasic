::::Read-Only Properties

In TypeScript 2.0, the readonly modifier was added to the language. Properties marked with readonly can only be assigned to during initialization or from within a constructor of the same class. All other assignments are disallowed.
Let's take a look at an example. Here's a simple Point type that declares two read-only properties, x and y:
	type Point = {
	    readonly x: number;  // defined type
	    readonly y: number;
	};
We can now create an object representing the point (0|0), the origin, and initialize both x and y with the value 0:
	const origin: Point = { x: 0, y: 0 };
However, because x and y are marked readonly, we cannot change the value of either property afterwards:
// Error: Left-hand side of assignment expression
// cannot be a constant or read-only property
	origin.x = 100;