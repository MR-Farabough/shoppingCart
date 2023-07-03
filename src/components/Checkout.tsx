import CheckoutCard from './CheckoutCard';
import emptyCartImg from '../assets/empty-cart.png';

interface Props {
	totalItems: any[];
	updateCart: Function;
}

const Checkout = ({ totalItems, updateCart }: Props) => {
	const productCards = totalItems.map(
		(item) =>
			item != null && (
				<CheckoutCard
					key={item[1]}
					img={item[0]}
					title={item[1]}
					processor={item[2]}
					price={parseInt(item[4])}
					totalItems={totalItems}
					updateCart={updateCart}
				/>
			)
	);

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
