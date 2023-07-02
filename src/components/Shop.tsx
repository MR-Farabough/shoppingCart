import AppleWatch from './AppleWatch';
import Iphone from './Iphone';
import Mac from './Mac';

interface Props {
	setCart: Function;
	currentCart: [];
}

const Shop = ({ setCart, currentCart }: Props) => {
	return (
		<>
			<AppleWatch currentCart={currentCart} setCart={setCart} />
			<Iphone currentCart={currentCart} setCart={setCart} />
			<Mac currentCart={currentCart} setCart={setCart} />
		</>
	);
};

export default Shop;
