import bkash from "../bkash";
const paymentRequest = {
	amount: 1000,
	orderID: 'ORD1020069',
	intent: 'sale',
};

const result = await bkash.createPayment(paymentRequest);
console.log(result);

