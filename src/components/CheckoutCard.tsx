import { useState } from 'react';
import '../styles/Checkout.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	price: number;
	totalItems: string[];
	updateCart: Function;
}

const CheckoutCard = ({
	img,
	title,
	processor,
	price,
	updateCart,
	totalItems,
}: Props) => {
	const [quantity, setQuantity] = useState(1);
	const handleMinus = () => {
		let found = false;
		const cache = [...totalItems];
		if (quantity > 1) {
			const updatedQuantity = quantity - 1;
			setQuantity(updatedQuantity);
			cache.forEach((item) => {
				if (item === null && !found) {
					found = true;
					const index = cache.indexOf(item);
					cache.splice(index, 1);
					updateCart(cache);
				}
			});
		} else {
			totalItems.forEach((item) => {
				if (item != null && item[1] === title && !found) {
					found = true;
					const index = cache.indexOf(item);
					cache.splice(index, 1);
					updateCart(cache);
				}
			});
		}
	};
	const handlePlus = () => {
		const updatedQuantity = quantity + 1;
		const newObj = [...totalItems, null];
		updateCart(newObj);
		setQuantity(updatedQuantity);
	};

	return (
		<div className="checkout-subcontainer">
			<img className="checkout-product-image" src={img} alt="Product Image" />
			<h3 className="checkout-title">{title}</h3>
			<p className="checkout-processor">{processor}</p>
			<p className="checkout-price">${price}</p>
			<div className="handleQuantity">
				<button onClick={handleMinus} className="minus">
					-
				</button>
				<p className="quantity">{quantity}</p>
				<button onClick={handlePlus} className="plus">
					+
				</button>
			</div>
		</div>
	);
};

export default CheckoutCard;
