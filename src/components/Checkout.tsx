import CheckoutCard from './CheckoutCard';
import emptyCartImg from '../assets/empty-cart.png';

interface Props {
	totalItems: any[];
	updateCart: Function;
}

const Checkout = ({ totalItems, updateCart }: Props) => {
	const removeItem = (itemToRemove: string) => {
		let isItemRemoved = false;
		const updatedItems = totalItems.filter((item) => {
			console.log(itemToRemove);
			if (item.id === itemToRemove && !isItemRemoved) {
				isItemRemoved = true;
				return false;
			}
			return true;
		});
		updateCart(updatedItems);
	};

	const productCards = totalItems.map((item, index) => (
		<CheckoutCard
			key={index}
			img={item[0]}
			title={item[1]}
			processor={item[2]}
			price={parseInt(item[4])}
			itemToRemove={item}
			removeItem={removeItem}
			id={item.id}
		/>
	));

	const noItems = <img src={emptyCartImg} alt="empty-cart" />;

	return (
		<div>
			{totalItems.length > 0 ? (
				<div className="checkout-container">{productCards}</div>
			) : (
				<div className="empty-cart-image">{noItems}</div>
			)}
		</div>
	);
};

export default Checkout;
