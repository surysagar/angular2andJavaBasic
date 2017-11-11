::::: Boolean Literal Types
The following example defines two constants, TRUE and FALSE, which hold the values true and false, respectively:
const TRUE: true = true;     // OK
const FALSE: false = false;  // OK


Trying to assign the opposite boolean value to each of the local variables results in a type error:
const TRUE: true = false;
// Error: Type 'false' is not assignable to type 'true'\
const FALSE: false = true;
// Error: Type 'true' is not assignable to type 'false'
// 
// 
With the introduction of boolean literal types, the predefined boolean type is now equivalent to the true | false union type:

let value: true | false;  // Type boolean
While boolean literal types are rarely useful in isolation, they work great in conjunction with tagged union types and control flow based type analysis. For instance, a generic Result<T> type that either holds a value of type T or an error message of type string can be defined as follows:

type Result<T> =
    { success: true; value: T } | { success: false; error: string };   // true or false
    

Here is a function that accepts a parameter .
function parseEmailAddress(input: string | null | undefined): Result<string> {
    // If the input is null, undefined, or the empty string
    // (all of which are falsy values), we return early.
    if (!input) {
        return {
            success: false,
            error: "The email address cannot be empty."
        };
    }

    // We're only checking that the input matches the pattern
    //   <something> @ <something> DOT <something>
    // to keep it simple. Properly validating email addresses
    // via regex is hard, so let's not even try here.
    if (!/^\S+@\S+\.\S+$/.test(input)) {
        return {
            success: false,
            error: "The email address has an invalid format."
        };
    }

    // At this point, control flow based type analysis
    // has determined that the input has type string.
    // Thus, we can assign input to the value property.
    return {
        success: true,
        value: input
    };
}