import { useState } from 'react';
import '../styles/Checkout.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	description: string;
	price: number;
	itemToRemove: string[];
	totalItems: string[];
	updateCart: Function;
}

const CheckoutCard = ({
	img,
	title,
	processor,
	description,
	price,
	updateCart,
	totalItems,
}: Props) => {
	const [quantity, setQuantity] = useState(1);
	const [isDeleted, setIsDeleted] = useState(false);
	const obj = [img, title, processor, description, price];
	const handleMinus = () => {
		let found = false;
		totalItems.forEach((item) => {
			console.log(item[1], title, found, 'debug');
			if (item[1] === title && !found) {
				found = true;
				const cache = [...totalItems];
				const index = cache.indexOf(item);
				cache.splice(index, 1);
				updateCart(cache);
				setIsDeleted(true);
			}
		});
	};
	const handlePlus = () => {
		const updatedQuantity = quantity + 1;
		const newObj = [...totalItems, obj];
		updateCart(newObj);
		setQuantity(updatedQuantity);
	};

	if (isDeleted) {
		return null;
	}

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
				<button onClick={handlePlus} className="plus">
					+
				</button>
			</div>
		</div>
	);
};

export default CheckoutCard;
