import AppleWatch from './AppleWatch';
import Iphone from './Iphone';
import Mac from './Mac';

interface Props {
	setCart: Function;
}

const Shop = ({ setCart }: Props) => {
	return (
		<>
			<AppleWatch setCart={setCart} />
			<Iphone setCart={setCart} />
			<Mac setCart={setCart} />
		</>
	);
};

export default Shop;
