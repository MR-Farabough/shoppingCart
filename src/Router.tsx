import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import About from './components/About';
import NotFound from './components/NotFound';

const Router = () => {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="/shop" Component={Shop} />
			<Route path="/checkout" Component={Checkout} />
			<Route path="/about" Component={About} />
			<Route path="*" Component={NotFound} />
		</Routes>
	);
};

export default Router;
