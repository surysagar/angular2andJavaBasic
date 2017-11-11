
:::: Numeric Literal Types
Similar to string literal types, we can restrict numeric variables to a finite set of known values:
let zeroOrOne: 0 | 1;
zeroOrOne = 0;// OK
zeroOrOne = 1; // OK
zeroOrOne = 2;// Error: Type '2' is not assignable to type '0 | 1'

function getPort(scheme: "http"): 80;
function getPort(scheme: "https"): 443;
function getPort(scheme: "http" | "https"): 80 | 443 {
    switch (scheme) {
        case "http": return 80;
        case "https": return 443;
    }
};

const httpPort = getPort("http");    // Type 80
const httpsPort = getPort("https");  // Type 443