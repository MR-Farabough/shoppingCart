import '../styles/Iphone.css';
import phones from '../assets/fivePhones.jpg';
import comparison from '../assets/comparisonPhone.png';
import closeUp from '../assets/closeUpPhone.png';
import example from '../assets/exampleIsland.webp';
import ProductCard from './ProductCard';
import ip14P from '../assets/14Pro.jpg';
import ip14 from '../assets/14.jpg';
import ip13 from '../assets/13.jpg';
import se from '../assets/se.jpg';

interface Props {
	setCart: Function;
	currentCart: [];
}

const Iphone = ({ setCart, currentCart }: Props) => {
	return (
		<div className="container">
			<p className="heroTitle">Iphone 14 Pro Max</p>
			<p className="subHeroTitle">Simply Magic.</p>
			<img className="phone-image" src={phones} alt="IPhone Array" />
			<p className="heroTitle">Dynamic Island</p>
			<p className="subHeroTitle">Bring apps to life.</p>
			<img
				className="phone-image"
				src={closeUp}
				alt="Close Up Dynamic Island"
			/>
			<img className="phone-image" src={example} alt="Example Island" />
			<div className="comparison">
				<img className="leftside" src={comparison} alt="IPhone Array" />
				<div className="rightside">
					<p>
						The iPhone 13 and iPhone 14 Pro are both technological marvels that
						push the boundaries of what a smartphone can do. The iPhone 13, with
						its stunning Super Retina XDR display, powerful A15 Bionic chip, and
						advanced camera system, delivers a phenomenal user experience. It's
						a device that seamlessly blends beauty and performance, capturing
						every detail and moment with precision. On the other hand, the
						iPhone 14 Pro takes innovation to new heights with its ProMotion
						display, boasting a buttery-smooth 120Hz refresh rate, and an even
						more powerful A16 Bionic chip. Its camera system reaches new levels
						of sophistication, offering unmatched photography and videography
						capabilities. The iPhone 14 Pro sets a new standard for flagship
						smartphones, combining sleek design, unmatched performance, and
						cutting-edge features that will leave you awe-inspired. Whichever
						you choose, both iPhones will undoubtedly redefine the way you
						connect, create, and experience the world.
					</p>
				</div>
			</div>
			<p className="heroTitle">Which phone is for you?</p>
			<p className="subHeroTitle"></p>
			<div className="productContainer">
				<ProductCard
					img={ip14P}
					title="IPhone 14 Pro"
					processor="A16 Bionic chip"
					description="The ultimate iPhone."
					price={999}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={ip14}
					title="IPhone 14"
					processor="A16 Bionic chip"
					description="A total powerhouse."
					price={799}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={ip13}
					title="IPhone 13"
					processor="A15 Bionic chip"
					description="As amazing as ever."
					price={599}
					addToCart={setCart}
					totalItems={currentCart}
				/>
				<ProductCard
					img={se}
					title="IPhone SE"
					processor="A13 Bionic chip"
					description="Serious power. Serious value."
					price={429}
					addToCart={setCart}
					totalItems={currentCart}
				/>
			</div>
		</div>
	);
};

export default Iphone;
