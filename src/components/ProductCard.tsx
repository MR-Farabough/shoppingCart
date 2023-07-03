import '../styles/ProductCard.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	description: string;
	price: number;
	addToCart: Function;
	totalItems: [];
}

const ProductCard = ({
	img,
	title,
	processor,
	description,
	price,
	addToCart,
	totalItems,
}: Props) => {
	const obj = [img, title, processor, description, price];
	const modal = () => {
		const newModal = document.createElement('div');
		newModal.classList.add('modal');
		newModal.innerHTML = `
		Item already in cart.
		Adjust quantity in cart.
		`;
		document.body.appendChild(newModal);
		setTimeout(() => {
			newModal.remove();
		}, 3000);
	};
	const handleClick = () => {
		let found = false;
		totalItems.forEach((item) => {
			if (item[1] === title) {
				found = true;
			}
		});
		!found ? addToCart(obj) : modal();
	};

	return (
		<div className="card">
			<img className="card-product" src={img} alt="Product Image" />
			<h3 className="card-title">{title}</h3>
			<p className="card-processor">{processor}</p>
			<p className="card-description">{description}</p>
			<p className="card-price">${price}</p>
			<button onClick={handleClick} className="buyBTN">
				Add To Cart
			</button>
		</div>
	);
};

export default ProductCard;
