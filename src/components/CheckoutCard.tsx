import { useState } from 'react';
import '../styles/Checkout.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	price: number;
	removeItem: Function;
	itemToRemove: string[];
	id: number;
}

const CheckoutCard = ({
	img,
	title,
	processor,
	price,
	removeItem,
	id,
}: Props) => {
	const [quantity, setQuantity] = useState(1);
	const [isDeleted, setIsDeleted] = useState(false);
	const item = id;
	const handleMinus = () => {
		const updatedQuantity = quantity - 1;
		if (updatedQuantity === 0) {
			const userInput = prompt('Confirm delete 1');
			if (userInput === '1') {
				setIsDeleted(true);
				removeItem(item);
			} else {
				setQuantity(1);
			}
		} else {
			setQuantity(updatedQuantity);
		}
	};

	const handlePlus = () => {
		const updatedQuantity = quantity + 1;
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
				<p className="quantity">{quantity}</p>
				<button onClick={handlePlus} className="plus">
					+
				</button>
			</div>
		</div>
	);
};

export default CheckoutCard;
