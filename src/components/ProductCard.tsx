import '../styles/ProductCard.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	description: string;
	price: number;
	addToCart: Function;
}

const ProductCard = ({
	img,
	title,
	processor,
	description,
	price,
	addToCart,
}: Props) => {
	const handleClick = () => {
		addToCart([img, title, processor, description, price]);
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
