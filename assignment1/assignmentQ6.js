// Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
// method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
// processing fee associated with each payment method. For example, "credit" may have a processing fee of
// 2%, "debit" 1.5%, and "paypal" 3%.

function calculateProcessingFee(paymentMethod) {
    let processingFee;

    switch (paymentMethod) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return; // Exit the function for invalid payment methods
    }

    console.log(`The processing fee for ${paymentMethod} is ${processingFee}%.`);
}

// Example usage:
const enteredPaymentMethod = 'paypal';
calculateProcessingFee(enteredPaymentMethod);
