import pmtlogo from '../../../assets/images/mastercard.png'
import { orderPayment, verifyPayment } from '../../../services/razorpayservices';


const initPayment = (data,navigateProducts,handleAddProduct) => {
	const options = {
		key: "rzp_test_9ADUZBqYOUl6Yp",
		amount: data.amount,
		currency: data.currency,
		name: "Harish NN", // we can manipulate this line
		description: "Test Transaction",
		image: pmtlogo, // we can manipulate this line
		order_id: data.id,

		handler: async (response) => {
				verifyPayment(response)
				.then((res) => {
					console.log(res.data);
				let approved='true'
				handleAddProduct(approved)
				navigateProducts()
				alert("payment success")

				})
				.catch((res) => {
					alert(res + "")
				})
		},
		theme: {
			color: "#3399cc",
		},
		method: {
			netbanking: true,
			card: true,
			wallet: true,
			upi: true,
			paylater: true
		  },
	};
	const rzp1 = new window.Razorpay(options);
	rzp1.open();
};

export const handlePayment = async (navigateProducts,handleAddProduct) => {
	console.log(navigateProducts)
		orderPayment({ amount: 400 })
		.then((res) => {
			console.log(res.data.data.amount);
			initPayment(res.data.data,navigateProducts,handleAddProduct);

		})
		.catch((res) => {
			alert(res + "")
		})
};
export const handleApprovePayment = async (id,handleGiveApproval) => {
	console.log(id)
		orderPayment({ amount: 400 })
		.then((res) => {
			console.log(res.data.data.amount);
			initApprovePayment(res.data.data,id,handleGiveApproval);

		})
		.catch((res) => {
			alert(res + "")
		})
};

const initApprovePayment = (data,id,handleGiveApproval) => {
	const options = {
		key: "rzp_test_9ADUZBqYOUl6Yp",
		amount: data.amount,
		currency: data.currency,
		name: "Harish NN", // we can manipulate this line
		description: "Test Transaction",
		image: pmtlogo, // we can manipulate this line
		order_id: data.id,

		handler: async (response) => {
				verifyPayment(response)
				.then((res) => {
					console.log(res.data);
					handleGiveApproval(id)
				alert("payment success")

				})
				.catch((res) => {
					alert(res + "")
				})
		},
		theme: {
			color: "#3399cc",
		},
		method: {
			netbanking: true,
			card: true,
			wallet: true,
			upi: true,
			paylater: true
		  },
	};
	const rzp1 = new window.Razorpay(options);
	rzp1.open();
};