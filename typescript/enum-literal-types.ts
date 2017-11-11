:::: Enum Literal Types
Finally, we can also use enumerations as literal types. Continuing our example from before, we'll be implementing a function that maps from a given port (80 or 443) to the corresponding scheme (HTTP or HTTPS, respectively). To do that, we'll first declare a const enum which models the two port numbers:
const enum HttpPort {
    Http = 80,
    Https = 443
}

Now comes our getScheme function, again using function overloads for specialized type annotations:

function getScheme(port: HttpPort.Http): "http";
function getScheme(port: HttpPort.Https): "https";

function getScheme(port: HttpPort): "http" | "https" {
    switch (port) {
        case HttpPort.Http: return "http";
        case HttpPort.Https: return "https";
    }
}
const scheme = getScheme(HttpPort.Http); // Type "http"

Here is the compiled JavaScript code, with comments removed:
function getScheme(port) {
    switch (port) {
        case 80: return "http";
        case 443: return "https";
    }
}
var scheme = getScheme(80);


:::: string enums::::
TypeScript 2.4 implemented one of the most requested features: string enums, or, to be more precise, enums with string-valued members.
It is now possible to assign a string value to an enum member:

The string enum can be used like any other enum in TypeScript:

enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml"
}

fetch("https://example.com/api/endpoint", {
    headers: {
        Accept: MediaTypes.JSON
    }
}).then(response => {
    // ...
});