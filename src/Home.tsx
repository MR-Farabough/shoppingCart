import './styles/Home.css';
import mba from './assets/mba15.png';
import sonoma from './assets/macossonoma.webp';
import wwdc from './assets/wwdc-img.jpg';

function Home() {
	return (
		<div className="home-container">
			<h2 className="home-heroTitle">MacBook Air 15"</h2>
			<h3 className="home-subHeroTitle">Impressively big. Impossibly thin.</h3>
			<div className="home-heroLinks"></div>
			<img src={mba} className="home-image" alt="MacBook Air 15" />
			<div className="home-bigBlock"></div>
			<h2 className="home-heroTitle">Mac OS Sonoma</h2>
			<h3 className="home-subHeroTitle">We truly live in an age of wonders.</h3>
			<img src={sonoma} className="home-image" alt="Mac Sonoma" />
			<div className="home-block"></div>
			<h2 className="home-heroTitle">IOS 17</h2>
			<h3 className="home-subHeroTitle">Septemeber 2023</h3>
			<img src={wwdc} className="home-image" alt="wwdc render" />
		</div>
	);
}

export default Home;
