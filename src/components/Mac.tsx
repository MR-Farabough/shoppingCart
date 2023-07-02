import '../styles/Mac.css';
import m2Core from '../assets/m2-cores.jpg';
import mba from '../assets/openMBAM2.png';
import ProductCard from './ProductCard';
import dblMBA from '../assets/dblMBA.jpg';
import mbpM1 from '../assets/mbpM1.jpg';
import studio from '../assets/studio.jpg';
import mp from '../assets/macPro.jpg';

interface Props {
	setCart: Function;
	currentCart: [];
}

const Mac = ({ setCart, currentCart }: Props) => {
	return (
		<div className="container">
			<h2 className="heroTitle">Expierence the Power of M2</h2>
			<h3 className="subHeroTitle">Supercharged by M2 Max and M2 Ultra.</h3>
			<img className="mac-images" src={mba} alt="MBA" />;
			<h2 className="heroTitle">Apple Silicon</h2>
			<h3 className="subHeroTitle">The future is now.</h3>
			<img className="mac-images" src={m2Core} alt="m2 Core" />
			<h2 className="heroTitle">Which Mac is right for you?</h2>
			<h3 className="subHeroTitle"></h3>
			<div className="productContainer">
				<ProductCard
					img={dblMBA}
					processor="M2 Chip"
					description="Sleek and feather-light design, combining stunning visuals, blazing-fast performance, and a battery life that seems to last forever."
					title="MacBook Air 15''"
					price={999}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={mbpM1}
					processor="M1 Chip"
					description="Revolutionize your work and play, new heights of performance and immersion. Stunning Retina display, lightning-fast processors, and mind-blowing graphics. Redefine what it means to be a pro!"
					title="MacBook Pro 16''"
					price={1300}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={studio}
					processor="M2 Ultra Chip"
					description="Takes center stage! Sleek and stylish all-in-one computer. Ultimate companion for artists, designers, and visionaries. With its jaw-dropping display, and vibrant colors."
					title="Mac Studio"
					price={700}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={mp}
					processor="M2 Max Chip"
					description="Engineered for those who demand nothing but the best. Combines raw power, unmatched performance, and limitless possibilities. Say hello to a new era of professional computing!"
					title="Mac Pro"
					price={5999}
					addToCart={setCart}
					totalItems={currentCart}
				/>
			</div>
		</div>
	);
};

export default Mac;
