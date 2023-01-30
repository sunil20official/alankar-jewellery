import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';
import Footer from './components/footer/Footer.jsx';

function App() {
	return (
		<div style={{}} className='App'>
			<Navbar />
			<HeroSection />
			<Carousel />
			<OurCreations />
			<Footer />
		</div>
	);
}

export default App;
