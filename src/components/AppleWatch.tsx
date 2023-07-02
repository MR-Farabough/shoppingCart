import '../styles/ApplWatch.css';
import watchGroup from '../assets/watchGroup.jpg';
import purpleWatch from '../assets/purpleWatch.jpg';
import whiteWatch from '../assets/whiteWatch.jpg';
import ProductCard from './ProductCard';
import s8 from '../assets/ws8.jpg';
import se from '../assets/watchSE.jpg';
import ultra from '../assets/watchUltra.jpg';

interface Props {
	setCart: Function;
	currentCart: [];
}

const AppleWatch = ({ setCart, currentCart }: Props) => {
	return (
		<div className="container">
			<img className="watch-image" src={watchGroup} alt="Apple Watch Cluster" />
			<h3 className="heroTitle">The Apple Watch</h3>
			<h3 className="subHeroTitle"></h3>
			<div className="multiWatch">
				<img
					className="watch-image"
					src={purpleWatch}
					alt="Apple Watch Cluster"
				/>
				<img
					className="watch-image"
					src={whiteWatch}
					alt="Apple Watch Cluster"
				/>
			</div>
			<h3 className="heroTitle">Which Watch is right for you?</h3>
			<h3 className="subHeroTitle"></h3>
			<div className="productContainer">
				<ProductCard
					img={s8}
					title="Apple Watch Series 8"
					processor="W3 Chip"
					description="The epitome of elegance and innovation on your wrist! Sleek design and dazzling display. Stay connected, track your fitness, enhance productivity with cutting-edge features that will leave you breathless."
					price={399}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={se}
					title="Apple Watch SE"
					processor="S8 Chip"
					description="Perfect balance of style and affordability! Your ultimate companion for staying active, staying connected. With a stunning Retina display, powerful performance, and a wide range of features, it's a smartwatch that offers incredible value without compromising on quality."
					price={249}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={ultra}
					title="Apple Watch Ultra"
					processor="S8 chip"
					description="The pinnacle of wearable technology! An experience that transcends imagination. Futuristic design, advanced health monitoring capabilities, and an array of groundbreaking features. Get ready to redefine what's possible with the ultimate smartwatch revolution!"
					price={799}
					addToCart={setCart}
					totalItems={currentCart}
				/>
			</div>
		</div>
	);
};

export default AppleWatch;
