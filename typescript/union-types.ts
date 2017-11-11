:::: Union Types example used in Modelling Payment Methods with Tagged

We want to model the following payment methods that users of a system can choose from:
Cash without further information,
PayPal with a given email address, or
Credit card with a given card number and security code.

For each of these payment methods, we can create a TypeScript interface:
interface Cash {
    kind: "cash";
}

interface PayPal {
    kind: "paypal";
    email: string;
}

interface CreditCard {
    kind: "credit";
    cardNumber: string;
    securityCode: string;
}
Note that, in addition to the required information, each type has a kind property — the so-called discriminant property. 
It's of a string literal type in each case here. We'll look at the discriminant property in a minute.

Let now also define a PaymentMethod type that is the union of the three types we just defined. This way, 
we re stating that every payment method must have exactly one of the three given constituent types:

type PaymentMethod = Cash | PayPal | CreditCard;

Now that our types are in place. Let write a function that accepts a payment method and returns a human-readable description of it:
describePaymentMethod({kind: "paypal", email:"sag@gmail.com"})

function describePaymentMethod(method: PaymentMethod) {
    switch (method.kind) {
        case "cash":        // track kind property of argument object(method)            
            return "Cash";  // Here, method has type Cash

        case "paypal":
            // Here, method has type PayPal
            return `PayPal (${method.email})`;

        case "credit":
            // Here, method has type CreditCard
            return `Credit card (${method.cardNumber})`;
    }
}
