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
import { useEffect, useState } from 'react';

const Router = () => {
	let [cart, setCart] = useState([]);
	let [totalCart, setTotalCart] = useState<{}[]>([]);
	const [mobileNav, setMobileNav] = useState(false);
	if (cart.length > 0) {
		setTotalCart([...totalCart, cart]);
		setCart([]);
	}
	useEffect(() => {
		resizeNav();
	}, []);
	const resizeNav = () => {
		if (window.innerWidth < 650) {
			setMobileNav(true);
		} else {
			setMobileNav(false);
		}
	};
	window.addEventListener('resize', resizeNav);
	return (
		<>
			{!mobileNav && (
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
								<p className="cart-count">{totalCart.length}</p>
							</Link>
						</div>
					</div>
				</div>
			)}
			{mobileNav && (
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
							<Link to={'/checkout'}>
								<p className="navText">Checkout</p>
							</Link>
							<Link to={'/checkout'}>
								<img src={shoppingCart} alt="shopping cart" />
								<p className="cart-count">{totalCart.length}</p>
							</Link>
						</div>
					</div>
				</div>
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/shop"
					element={<Shop currentCart={totalCart} setCart={setCart} />}
				/>
				<Route
					path="/mac"
					element={<Mac currentCart={totalCart} setCart={setCart} />}
				/>
				<Route
					path="/iphone"
					element={<Iphone currentCart={totalCart} setCart={setCart} />}
				/>
				<Route
					path="/watch"
					element={<AppleWatch currentCart={totalCart} setCart={setCart} />}
				/>
				<Route
					path="/checkout"
					element={
						<Checkout totalItems={totalCart} updateCart={setTotalCart} />
					}
				/>
				<Route path="*" element={<NotFound />} />
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
