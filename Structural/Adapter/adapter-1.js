class PaymentProcessor {
    processPayment(amount) {
        throw new Error("This method should be implemented by subclasses");
    }
}

class ThirdPartyPaymentService {
    sendPayment(money) {
        return `Payment of $${money} sent via ThirdPartyPaymentService.`;
    }
}

class PaymentAdapter extends PaymentProcessor {
    constructor(thirdPartyService) {
        super();
        this.thirdPartyService = thirdPartyService;
    }

    processPayment(amount) {
        // Translate the `processPayment` method to call `sendPayment` on the third-party service.
        return this.thirdPartyService.sendPayment(amount);
    }
}

// Client code
function makePayment(paymentProcessor, amount) {
    console.log(paymentProcessor.processPayment(amount));
}

// Using the adapter
const thirdPartyService = new ThirdPartyPaymentService();
const paymentAdapter = new PaymentAdapter(thirdPartyService);

// Process the payment through the adapter
makePayment(paymentAdapter, 50.0);
