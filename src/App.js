import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';
import Footer from './components/footer/Footer.jsx';
import About from './pages/aboutus/About';
import Watch from './pages/watches/Watch';


function App() {
	return (
		<div style={{ minHeight: '400vh' }} className='App'>
			<Navbar />
      <About />
      <Watch />
			{/* <HeroSection /> */}
			<Carousel />
			<OurCreations />
			<Footer />
			
		</div>
	);
}

export default App;
