import '../styles/ProductCard.css';

interface Props {
	img: string;
	title: string;
	processor: string;
	description: string;
	price: number;
}

const ProductCard = ({ img, title, processor, description, price }: Props) => {
	return (
		<div className="card">
			<img className="card-product" src={img} alt="Product Image" />
			<h3 className="card-title">{title}</h3>
			<p className="card-processor">{processor}</p>
			<p className="card-description">{description}</p>
			<p className="card-price">${price}</p>
			<button className="buyBTN">Add To Cart</button>
		</div>
	);
};

export default ProductCard;
