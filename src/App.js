import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<Carousel />
		</div>
	);
}

export default App;
