import React , {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import SplashScreen from './components/splashscreen/SplashScreen';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel.jsx';
import OurCreations from './components/ourcreations/OurCreations';
import Footer from './components/footer/Footer.jsx';
import About from './pages/aboutus/About';
import Watch from './pages/watches/Watch';
import GoTop from './components/GoTop';

function App() {
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 900);
		window.scrollTo(0, 0);
	})

	if (loading) return <SplashScreen />;

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
								<Carousel />
								<OurCreations />
							</>
						}
					/>
					<Route path='/watches' element={<Watch />} />
					<Route path='/about' element={<About />} />
				</Routes>

				<GoTop />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
