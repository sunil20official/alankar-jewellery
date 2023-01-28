import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<Carousel />
			<OurCreations />
		</div>
	);
}

export default App;
