import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import appleLogo from './assets/black-apple-logo.png';
import shoppingCart from './assets/shoppingBag.svg';
import githubLogo from './assets/githubLogo.png';
import Mac from './components/Mac';
import Iphone from './components/Iphone';
import AppleWatch from './components/AppleWatch';

const Router = () => {
	return (
		<>
			<div className="main-nav">
				<div className="navBar">
					<Link to={'/'}>
						<img src={appleLogo} alt="test" />
					</Link>
					<div className="navLinks">
						<Link to={'/'}>
							<p className="navText">Home</p>
						</Link>
						<Link to={'/shop'}>
							<p className="navText">Store</p>
						</Link>
						<div className="products">
							<Link to={'/mac'}>
								<p className="productText">Mac</p>
							</Link>
							<Link to={'/iphone'}>
								<p className="productText">Iphone</p>
							</Link>
							<Link to={'/watch'}>
								<p className="productText">Watch</p>
							</Link>
						</div>
						<Link to={'/checkout'}>
							<p className="navText">Checkout</p>
						</Link>
						<Link to={'/checkout'}>
							<img src={shoppingCart} alt="shopping cart" />
							<p className="cart-count">0</p>
						</Link>
					</div>
				</div>
			</div>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/shop" Component={Shop} />
				<Route path="/mac" Component={Mac} />
				<Route path="/iphone" Component={Iphone} />
				<Route path="/watch" Component={AppleWatch} />
				<Route path="/checkout" Component={Checkout} />
				<Route path="*" Component={NotFound} />
			</Routes>
			<div className="footer">
				<p>
					All Rights Reserved by <a href="https://apple.com">Apple</a>.
				</p>
				<p>
					Fair use of material is subject to the terms and conditions of the
					Creative Commons license.
				</p>
				<div className="githubFooter">
					<img src={githubLogo} alt="Github Logo" />
					<a href="https://github.com/michael-lgtm">Michael</a>
				</div>
			</div>
		</>
	);
};

export default Router;
