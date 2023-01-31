import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';
import Footer from './components/footer/Footer.jsx';
import About from './pages/aboutus/About';
import Watch from './pages/watches/Watch';
import GoTop from './components/GoTop';

function App() {
	return (
		<div style={{}} className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<HeroSection />
								<About />
								<Carousel />
								<OurCreations />
							</>
						}
					/>
					<Route path='/watches' element={<Watch />} />
				</Routes>

				<GoTop />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
