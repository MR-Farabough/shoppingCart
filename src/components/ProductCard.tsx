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
	const handleClick = () => {
		let found = false;
		totalItems.forEach((item) => {
			if (item[1] === title) {
				found = true;
			}
		});
		!found ? addToCart(obj) : alert('Item already in cart');
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
